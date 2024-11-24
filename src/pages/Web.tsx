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
          <div className="portfolio-card p-6">
            <h3 className="text-xl font-bold mb-4">Pd-Public Disturbance</h3>
            <div className="h-40 bg-dermart-gray/50 rounded-lg mb-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/0209ab9c-169d-41a3-b892-40af5e168215.png" 
                alt="Public Disturbance Logo" 
                className="h-32 w-auto object-contain"
              />
            </div>
            <p className="text-dermart-white/80">
              A custom-designed website for the clothing brand "Pd-Public Disturbance", 
              showcasing the latest collections and brand identity.
            </p>
          </div>
          <div className="portfolio-card p-6">
            <h3 className="text-xl font-bold mb-4">Hardware Programming Projects</h3>
            <div className="h-40 bg-dermart-gray/50 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-dermart-white/60">Hardware Project Demo</span>
            </div>
            <p className="text-dermart-white/80">
              Practice projects focused on hardware programming, demonstrating fundamental 
              coding concepts and electronic system integration.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Web;