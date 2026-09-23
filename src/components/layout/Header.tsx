import React, { useState } from 'react';
import { Search, Menu, X, ShoppingBag } from 'lucide-react';
import { useOrder } from '../../context/OrderContext';

export const Header: React.FC = () => {
  const { openOrderModal, openSearch, activeTab, setActiveTab } = useOrder();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-header border-b border-stone-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left Side: Mobile Hamburger Menu & Desktop Nav Links */}
          <div className="flex items-center gap-4 flex-1">
            {/* Mobile Hamburger Toggle (Left on mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation Links (Left side) */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors py-1 focus:outline-none ${
                    activeTab === link.id
                      ? 'text-burgundy-900 font-bold border-b-2 border-burgundy-900'
                      : 'text-stone-600 hover:text-stone-950'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Middle: Official AVYUKT Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <button
              onClick={() => handleNavClick('home')}
              className="focus:outline-none flex items-center justify-center group"
              aria-label="Avyukt Restaurant Home"
            >
              <img
                src="/logo.png"
                alt="Avyukt Restaurant Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200 drop-shadow-xs"
              />
            </button>
          </div>

          {/* Right Side: Search & Primary Order CTA */}
          <div className="flex items-center justify-end gap-2.5 sm:gap-3 flex-1">
            <button
              onClick={openSearch}
              className="p-2 rounded-full text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Search Menu"
              title="Search Menu"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => openOrderModal()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-white text-xs sm:text-sm font-bold shadow-xs transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-gold-300" />
              <span>ORDER ONLINE</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-1 pt-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === link.id
                    ? 'bg-burgundy-800 text-white'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openOrderModal();
              }}
              className="w-full py-3 rounded-xl bg-burgundy-800 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-gold-300" />
              <span>ORDER ONLINE (SWIGGY / ZOMATO)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
