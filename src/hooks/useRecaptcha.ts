import { useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

export const useRecaptcha = () => {
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

  return { executeRecaptcha, verifyRecaptchaToken };
};