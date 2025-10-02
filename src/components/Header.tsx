import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import LogoImage from '../images/BJ.png';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'courses', label: 'Courses' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="glass-card backdrop-blur-md bg-white/90 shadow-lg border-b border-white/20 sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="gradient-bg-1 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 8699586385</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Mail className="w-4 h-4" />
              <span className="text-sm">bjtechinnovations@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block text-sm animate-pulse">
            Professional IT Services & Training
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group">
            {/* <div className="gradient-bg-1 text-white p-2 rounded-xl mr-3 pulse-glow group-hover:scale-110 transition-all duration-300">
              <span className="font-bold text-lg">BJ</span>
            </div> */}

            <img
              src={LogoImage}
              alt="BJ Tech Innovations Logo"
              className="h-10 w-auto mr-3 pulse-glow group-hover:scale-110 transition-all duration-300"
            />
            <div>
              <h1 className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform">BJ Tech Innovations</h1>
              <p className="text-sm text-gray-600">🚀 IT Services & Training</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-3 py-2 rounded-md transition-colors ${currentPage === item.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              onClick={() => onPageChange('contact')}
              className="modern-button gradient-bg-1 hover:scale-105 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ✨ Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md transition-colors ${currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onPageChange('contact');
                  setIsMenuOpen(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}