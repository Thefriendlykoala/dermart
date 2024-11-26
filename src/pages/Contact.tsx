import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredContent = [
    {
      type: 'image',
      url: '/lovable-uploads/40d69a61-1069-44f2-8de5-f052c2bd4942.png',
      title: 'Featured Artwork'
    },
    {
      type: 'audio',
      url: '/path-to-audio.mp3',
      title: 'Featured Track'
    },
    {
      type: 'program',
      url: '/lovable-uploads/0209ab9c-169d-41a3-b892-40af5e168215.png',
      title: 'Featured Program'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">dermFeatured</h1>
        
        <div className="glass-effect p-8 mb-8">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <motion.img
              key={currentIndex}
              src={featuredContent[currentIndex].url}
              alt={featuredContent[currentIndex].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold text-white">
                {featuredContent[currentIndex].title}
              </h3>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Submit Your Work</h2>
          <p className="text-dermart-white/80 mb-6">
            Want to be featured? Submit your work to be part of our monthly showcase!
          </p>
          <a
            href="mailto:walshe.lachy+dermART@gmail.com"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            Submit to dermFeatured
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;