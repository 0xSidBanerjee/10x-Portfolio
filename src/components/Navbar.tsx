
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-neutral-100 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          SB.
        </Link>
        
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="text-sm font-medium text-neutral-800 hover:text-black transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/work" 
                className="text-sm font-medium text-neutral-800 hover:text-black transition-colors"
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="text-sm font-medium text-neutral-800 hover:text-black transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className="text-sm font-medium text-neutral-800 hover:text-black transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
