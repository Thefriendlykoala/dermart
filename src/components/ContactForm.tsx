import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';

interface RecaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  'error-codes'?: string[];
}

const ContactForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePhoneChange = (value: string) => {
    setPhone(value);
    try {
      if (value && !isValidPhoneNumber(value, 'US')) {
        setPhoneError("Please enter a valid US phone number");
      } else {
        setPhoneError("");
      }
    } catch (error) {
      setPhoneError("Please enter a valid phone number");
    }
  };

  const verifyRecaptchaToken = async (token: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data: RecaptchaResponse = await response.json();

      if (!data.success) {
        const errorMessage = data['error-codes']?.join(', ') || 'Verification failed';
        toast({
          title: "Verification Failed",
          description: `reCAPTCHA verification failed: ${errorMessage}`,
          variant: "destructive",
        });
        return false;
      }

      // For v3, you might want to check the score threshold
      return true;
    } catch (error) {
      console.error('reCAPTCHA verification error:', error);
      toast({
        title: "Verification Error",
        description: "Failed to verify reCAPTCHA response. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const executeRecaptcha = async () => {
    try {
      const token = await window.grecaptcha.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY,
        { action: 'submit_contact_form' }
      );
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = await executeRecaptcha();
      
      if (!token) {
        toast({
          title: "Verification failed",
          description: "Could not generate reCAPTCHA token",
          variant: "destructive",
        });
        return;
      }

      const isVerified = await verifyRecaptchaToken(token);
      
      if (!isVerified) {
        return;
      }

      if (phoneError) {
        toast({
          title: "Invalid phone number",
          description: "Please enter a valid phone number",
          variant: "destructive",
        });
        return;
      }

      const formData = new FormData(e.currentTarget);
      
      // In a real application, you would send this to your backend
      const emailData = {
        to: "lankylc.business@gmail.com",
        from: formData.get("email"),
        name: formData.get("name"),
        phone: phone,
        message: formData.get("message"),
        attachment: file,
      };

      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });

      // Reset form
      e.currentTarget.reset();
      setFile(null);
      setPhone("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-dermart-white">Name</Label>
        <Input 
          type="text" 
          id="name" 
          name="name"
          className="mt-1 text-black bg-white/90" 
          required 
        />
      </div>
      
      <div>
        <Label htmlFor="email" className="text-dermart-white">Email</Label>
        <Input 
          type="email" 
          id="email" 
          name="email"
          className="mt-1 text-black bg-white/90" 
          required 
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-dermart-white">Phone Number</Label>
        <Input 
          type="tel" 
          id="phone" 
          name="phone"
          value={phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          className="mt-1 text-black bg-white/90" 
          placeholder="+1 (555) 555-5555"
          required 
        />
        {phoneError && (
          <p className="text-red-500 text-sm mt-1">{phoneError}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="message" className="text-dermart-white">Message</Label>
        <textarea 
          id="message" 
          name="message"
          rows={4} 
          className="w-full mt-1 p-2 rounded-md border border-dermart-gray text-black bg-white/90" 
          required
        />
      </div>

      <div>
        <Label htmlFor="attachment" className="text-dermart-white">Attachment (optional)</Label>
        <Input
          type="file"
          id="attachment"
          name="attachment"
          className="mt-1 text-dermart-white bg-dermart-gray/20"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/80 transition duration-300 disabled:opacity-50"
        disabled={isSubmitting || !!phoneError}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;