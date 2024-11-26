import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const renderTitle = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className={char === char.toUpperCase() ? 'text-primary' : ''}>
        {char}
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          {renderTitle('dermFEATURED')}
        </h1>
        <p className="text-lg text-dermart-white/70 mb-6 text-center">Get in touch with us!</p>
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default Contact;