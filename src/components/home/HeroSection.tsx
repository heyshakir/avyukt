import React from 'react';
import { ShoppingBag, ArrowRight, Phone, Utensils } from 'lucide-react';
import { restaurantConfig } from '../../config/restaurant';
import { useOrder } from '../../context/OrderContext';

export const HeroSection: React.FC = () => {
  const { openOrderModal, setActiveTab } = useOrder();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 sm:py-10">
      {/* Clean Luxury Centered Hero */}
      <div className="relative rounded-3xl sm:rounded-[40px] bg-gradient-to-b from-burgundy-950 via-burgundy-900 to-[#2A000A] text-white overflow-hidden shadow-2xl border border-burgundy-800/40 text-center px-6 py-12 sm:py-20 lg:py-24">
        
        {/* Ambient Warm Glow Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full bg-rose-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-gold-500/10 blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Brand Name & Tagline */}
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
              {restaurantConfig.name}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <span className="font-sans text-lg sm:text-2xl font-bold text-gold-400 tracking-wide">
                {restaurantConfig.hindiName}
              </span>
              <span className="text-white/40">•</span>
              <span className="font-serif italic text-base sm:text-xl text-stone-200">
                Wish & Eat
              </span>
            </div>
            <p className="font-serif italic text-xl sm:text-3xl text-gold-200/95 pt-1">
              "Good Food. Great Moments."
            </p>
          </div>

          {/* Centered Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            {/* Primary Order Button */}
            <button
              onClick={() => openOrderModal()}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gold-400 hover:bg-gold-500 text-stone-950 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-gold-500/25 transition-all duration-200 active:scale-95 group"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ORDER ONLINE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setActiveTab('menu')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all active:scale-95"
            >
              <Utensils className="w-4 h-4 text-gold-300" />
              <span>View Menu</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${restaurantConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-stone-900/60 hover:bg-stone-900 text-stone-200 hover:text-white font-semibold text-xs sm:text-sm border border-stone-700/60 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{restaurantConfig.displayPhone}</span>
            </a>
          </div>

          {/* Clean Bottom Feature Pills */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-stone-300 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Dine-in
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              Drive-through
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              Delivery on Swiggy & Zomato
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
