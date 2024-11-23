import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Reach Out</h1>
        <div className="glass-effect p-8">
          <p className="text-xl mb-8">
            Let's collaborate on something amazing together.
          </p>
          <div className="space-y-6">
            <a href="mailto:contact@dermart.com" className="block text-primary hover:text-primary-hover transition-colors">
              contact@dermart.com
            </a>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-dermart-white hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-dermart-white hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-dermart-white hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;