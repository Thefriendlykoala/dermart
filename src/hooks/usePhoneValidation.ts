import { useState } from 'react';
import { isValidPhoneNumber } from 'libphonenumber-js';

export const usePhoneValidation = () => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

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

  return { phone, phoneError, handlePhoneChange };
};