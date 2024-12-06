import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'derm[HOME]', display: 'dermHOME' },
    { path: '/art', label: 'derm[ARTIST]', display: 'dermARTIST' },
    { path: '/music', label: 'derm[PRODUCER]', display: 'dermPRODUCER' },
    { path: '/web', label: 'derm[HACKER]', display: 'dermHACKER' },
    { path: '/contact', label: 'derm[FEATURED]', display: 'dermFEATURED' },
  ];

  const renderLabel = (label: string) => {
    return label.split(/(\[.*?\])/).map((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        return <span key={index} className="text-primary">{part.slice(1, -1)}</span>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <nav className="fixed w-full z-50 px-3 sm:px-6 py-3 sm:py-4 bg-dermart-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg sm:text-2xl font-bold text-dermart-white group">
          derm<span className="text-primary">ART</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2 lg:space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link text-sm lg:text-base ${
                location.pathname === link.path ? 'text-primary' : ''
              }`}
            >
              {renderLabel(link.label)}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-dermart-white/90 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-dermart-black/95 backdrop-blur-lg border-b border-white/5 md:hidden animate-fade-in">
            <div className="flex flex-col items-center py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link py-2 text-base ${
                    location.pathname === link.path ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {renderLabel(link.label)}
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