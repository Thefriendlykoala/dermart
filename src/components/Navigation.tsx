import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/art', label: 'dermARTIST' },
    { path: '/music', label: 'dermPRODUCER' },
    { path: '/web', label: 'dermHACKER' },
    { path: '/contact', label: 'dermFeatured' },
  ];

  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-dermart-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-dermart-white group">
          derm<span className="text-primary group-hover:text-primary/80 transition-colors">ART</span>
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
          className="md:hidden text-dermart-white/90 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-dermart-black/95 backdrop-blur-lg border-b border-white/5 md:hidden">
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