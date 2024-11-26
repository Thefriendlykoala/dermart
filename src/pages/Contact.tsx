import { motion } from 'framer-motion';

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
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dermart-white">Name</label>
            <input type="text" id="name" className="mt-1 block w-full p-2 border border-dermart-gray rounded-md" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dermart-white">Email</label>
            <input type="email" id="email" className="mt-1 block w-full p-2 border border-dermart-gray rounded-md" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dermart-white">Message</label>
            <textarea id="message" rows={4} className="mt-1 block w-full p-2 border border-dermart-gray rounded-md" required></textarea>
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/80 transition duration-300">Send Message</button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;