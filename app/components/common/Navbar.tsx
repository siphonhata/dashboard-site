'use client'
import { useState, useEffect, useCallback } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Features', href: 'features' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' },
  ];

  // Custom debounce function
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleScrollUpdate = useCallback(() => {
    setIsScrolled(window.scrollY > 0);

    // Find which section is currently in view
    const sections = navigationItems.map(item => document.getElementById(item.href));
    const scrollPosition = window.scrollY + 100; // Add offset for navbar height

    // Find the current active section
    let currentSection = 'home';
    sections.forEach((section) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      }
    });

    setActiveSection(currentSection);
  }, [navigationItems]);

  useEffect(() => {
    const debouncedScroll = debounce(handleScrollUpdate, 100);
    window.addEventListener('scroll', debouncedScroll);
    
    // Initial check for active section
    handleScrollUpdate();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [handleScrollUpdate]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    
    if (section) {
      const offset = 80;
      const offsetPosition = section.offsetTop - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const getLinkClassName = (href: string) => {
    const baseClasses = "transition-colors duration-200";
    const inactiveClasses = "text-gray-600 hover:text-blue-600";
    const activeClasses = "text-blue-600 font-medium";
    
    return `${baseClasses} ${activeSection === href ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, 'home')}
              className="flex items-center"
              aria-label="WebCraft Solutions home"
            >
              <Globe className="w-8 h-8 text-blue-600" aria-hidden="true" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                WebCraft Solutions
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleScroll(e, item.href)}
                className={getLinkClassName(item.href)}
                aria-current={activeSection === item.href ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg bg-white rounded-b-lg">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleScroll(e, item.href)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  activeSection === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
                aria-current={activeSection === item.href ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}