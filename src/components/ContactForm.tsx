import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';

const ContactForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!captchaValue) {
      toast({
        title: "Verification required",
        description: "Please complete the CAPTCHA verification",
        variant: "destructive",
      });
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
      captchaToken: captchaValue
    };

    // Simulated success for demo
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    // Reset form
    e.currentTarget.reset();
    setFile(null);
    setPhone("");
    setCaptchaValue(null);
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

      <div className="flex justify-center my-4">
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "your-recaptcha-site-key"}
          onChange={(value) => setCaptchaValue(value)}
          theme="dark"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/80 transition duration-300"
        disabled={!captchaValue || !!phoneError}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;