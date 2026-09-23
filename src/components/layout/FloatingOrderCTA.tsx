import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useOrder } from '../../context/OrderContext';

export const FloatingOrderCTA: React.FC = () => {
  const { openOrderModal } = useOrder();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-4 z-30 md:hidden animate-slide-up">
      <button
        onClick={() => openOrderModal()}
        className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-rose-900 text-white font-bold text-xs uppercase tracking-wider shadow-2xl border border-white/20 hover:scale-105 active:scale-95 transition-all animate-pulse-glow"
        aria-label="Order Online on Swiggy or Zomato"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-400" />
        </span>
        <ShoppingBag className="w-4 h-4 text-gold-300" />
        <span>Order Online</span>
      </button>
    </div>
  );
};
