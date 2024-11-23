import { motion } from 'framer-motion';

const Web = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Web & Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder for web projects */}
          <div className="portfolio-card p-6">
            <h3 className="text-xl font-bold mb-4">Project 1</h3>
            <div className="h-40 bg-dermart-gray/50 rounded-lg mb-4"></div>
          </div>
          <div className="portfolio-card p-6">
            <h3 className="text-xl font-bold mb-4">Project 2</h3>
            <div className="h-40 bg-dermart-gray/50 rounded-lg mb-4"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Web;