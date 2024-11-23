import { motion } from 'framer-motion';

const Music = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Music & Sounds</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder for music projects */}
          <div className="portfolio-card aspect-video"></div>
          <div className="portfolio-card aspect-video"></div>
          <div className="portfolio-card aspect-video"></div>
          <div className="portfolio-card aspect-video"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Music;