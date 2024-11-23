import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/art', label: 'Art/Discovery' },
    { path: '/music', label: 'Music/Sounds' },
    { path: '/web', label: 'Web/Programs' },
    { path: '/contact', label: 'Reach Out' },
  ];

  return (
    <nav className="fixed w-full z-50 px-6 py-4 glass-effect">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-dermart-white">
          derm<span className="text-primary">ART</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? 'text-primary' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <button
          className="md:hidden text-dermart-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-dermart-black/95 backdrop-blur-lg md:hidden">
            <div className="flex flex-col items-center py-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="nav-link py-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;