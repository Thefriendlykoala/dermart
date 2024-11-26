import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import { usePhoneValidation } from "@/hooks/usePhoneValidation";
import '../types/recaptcha';

const ContactForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { executeRecaptcha, verifyRecaptchaToken } = useRecaptcha();
  const { phone, phoneError, handlePhoneChange } = usePhoneValidation();

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

      e.currentTarget.reset();
      setFile(null);
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
