
import { useState } from 'react';
import {ShoppingCart} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Scroll to section on current page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to different page
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
      // bg-white/95 border-gray-100 border-b backdrop-blur-sm
    <header className="fixed top-0 left-0 right-0 z-50">
      {/*px-6 lg:px-8*/}
      <div className="container relative mx-auto py-1">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          {/*-translate-x-8 -translate-y-8*/}
          <div className="flex items-center  space-x-3">
            <img
              src="https://static.readdy.ai/image/e89de37d2d8bc4082d180247e1c4691b/66b02e37b5d312dea716d677f4477e9d.png"
              alt="EnnovatingX Logo"
              className='md:w-36 w-24'

            />
          </div>

          <div className='flex'>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
            <button className="text-white flex items-center gap-1 px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap cursor-pointer">
              <ShoppingCart />
            </button>
          </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-gray-700 cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer text-left"
                >
                  {item.name}
                </button>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap cursor-pointer mt-4">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
