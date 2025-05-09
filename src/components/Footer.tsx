import { Mail, Github, Twitter, SquareTerminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-neutral-100">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Siddhanta Banerjee. All rights reserved, unless you’re a recruiter with a six-figure offer.
            </p>
          </div>
          <div className="flex space-x-6 items-center">
            <a 
              href="mailto:hello@siddhantabanerjee.com" 
              className="text-neutral-600 hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/siddhantabanerjee" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-600 hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://twitter.com/siddhantab" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-600 hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <div className="group relative flex items-center">
              <a 
                href="https://suckless.siddhantabanerjee.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-sm text-neutral-600 hover:text-black transition-colors"
                aria-label="Barebones Work"
              >
                <SquareTerminal size={16} className="mr-1 text-neutral-600 hover:text-black transition-colors" />
                Barebones Work
              </a>
              <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                My real, no-BS work
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;