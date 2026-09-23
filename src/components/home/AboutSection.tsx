import React from 'react';
import { restaurantConfig } from '../../config/restaurant';
import { useOrder } from '../../context/OrderContext';

export const AboutSection: React.FC = () => {
  const { setActiveTab } = useOrder();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left: Clean Image */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft aspect-4/3 sm:aspect-square bg-stone-100">
            <img
              src="/gallery/family-dining-hall.jpg"
              alt="Avyukt Restaurant Dining Hall"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Concise Story & 3 Key Metrics */}
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-burgundy-800 uppercase tracking-wider">
              About Us • {restaurantConfig.hindiName}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Made With Passion. Served With Warmth.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Located on the 3rd Floor of Hotel Grand Ashok near the Bus Stand on Sanchi Road, Avyukt Restaurant is dedicated to authentic North Indian cuisine, homestyle dals, crispy dosas, and artisanal cold coffee at pocket-friendly prices.
          </p>

          {/* 3 Clean Minimal Metrics */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-white rounded-xl border border-stone-200/80 text-center">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-burgundy-900">
                {restaurantConfig.rating.stars}
              </span>
              <span className="text-[11px] text-stone-500">
                Google Rating
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-stone-200/80 text-center">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-stone-900">
                {restaurantConfig.stats.totalReviews}
              </span>
              <span className="text-[11px] text-stone-500">
                Reviews
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-stone-200/80 text-center">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-emerald-700">
                {restaurantConfig.priceRange.split(' ')[0]}
              </span>
              <span className="text-[11px] text-stone-500">
                Per Person
              </span>
            </div>
          </div>

          <div className="pt-1">
            <button
              onClick={() => setActiveTab('about')}
              className="text-xs font-semibold text-burgundy-800 hover:text-burgundy-900 underline underline-offset-4"
            >
              Read full story →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
