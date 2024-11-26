import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // In a real application, you would send this to your backend
    const emailData = {
      to: "lankylc.business@gmail.com",
      from: formData.get("email"),
      name: formData.get("name"),
      message: formData.get("message"),
      attachment: file
    };

    // Simulated success for demo
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    // Reset form
    e.currentTarget.reset();
    setFile(null);
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
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/80 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;