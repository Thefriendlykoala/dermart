import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          derm<span className="text-primary">ART</span>
        </h1>
        <p className="text-xl md:text-2xl text-dermart-white/80 max-w-2xl mx-auto">
          Exploring the intersection of art, sound, and technology
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { title: 'Art/Discovery', path: '/art' },
          { title: 'Music/Sounds', path: '/music' },
          { title: 'Web/Programs', path: '/web' },
        ].map((item) => (
          <motion.a
            key={item.path}
            href={item.path}
            className="portfolio-card p-8 text-center"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <div className="h-40 bg-dermart-gray/50 rounded-lg mb-4"></div>
            <p className="text-dermart-white/60">Explore Projects →</p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;