import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { restaurantConfig } from '../../config/restaurant';

export const LocationBar: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-stone-200/80 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        
        {/* Minimal Address & Open Status */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-burgundy-50 flex items-center justify-center text-burgundy-800 shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold text-stone-900">
              {restaurantConfig.address.compact}
            </p>
            <p className="text-[11px] text-stone-500">
              Open Daily • 11:00 AM – 11:00 PM
            </p>
          </div>
        </div>

        {/* 2 Clean Functional Actions */}
        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
          <a
            href={restaurantConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-white text-xs font-semibold transition-all active:scale-95"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Directions</span>
          </a>

          <a
            href={`tel:${restaurantConfig.phone}`}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-stone-600" />
            <span>{restaurantConfig.displayPhone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
