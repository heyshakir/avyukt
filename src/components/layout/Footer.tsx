import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, MessageCircle } from 'lucide-react';
import { restaurantConfig } from '../../config/restaurant';
import { useOrder } from '../../context/OrderContext';

export const Footer: React.FC = () => {
  const { openOrderModal, setActiveTab } = useOrder();

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const whatsappUrl = `https://wa.me/${restaurantConfig.whatsapp}?text=${encodeURIComponent(
    restaurantConfig.whatsappMessage
  )}`;

  return (
    <footer className="bg-stone-950 text-stone-400 pt-10 sm:pt-14 pb-28 sm:pb-32 md:pb-12 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Mobile Brand Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="focus:outline-none flex items-center"
              aria-label="Avyukt Restaurant Home"
            >
              <img
                src="/logo.png"
                alt="Avyukt Restaurant Logo"
                className="h-12 sm:h-14 w-auto object-contain brightness-110"
              />
            </button>
            <div>
              <span className="text-white font-serif text-lg font-bold block leading-snug">
                {restaurantConfig.name}
              </span>
              <span className="text-gold-400 font-medium text-xs">
                {restaurantConfig.hindiName} • Vidisha
              </span>
            </div>
          </div>

          {/* Quick Contact Badges on Mobile */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <a
              href={`tel:${restaurantConfig.phone}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium border border-stone-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{restaurantConfig.displayPhone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-emerald-300 font-medium border border-[#25D366]/30 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={restaurantConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 font-medium border border-stone-800 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-burgundy-400" />
              <span>Map</span>
            </a>
          </div>
        </div>

        {/* Multi-Column Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-stone-800">
          
          {/* Col 1: About & Ratings */}
          <div className="col-span-2 sm:col-span-1 space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              About Avyukt
            </h4>
            <p className="text-stone-400 leading-relaxed text-xs">
              North Indian favorites, thalis, dosas, and cold coffees atop Hotel Grand Ashok, Vidisha.
            </p>
            <div className="p-2.5 bg-stone-900/80 rounded-xl border border-stone-800/80 space-y-0.5">
              <span className="text-white font-bold block text-xs">
                ★ 4.4 Google Rating
              </span>
              <span className="text-stone-400 text-[11px] block">
                Based on 819+ Diner Reviews
              </span>
              <span className="text-gold-400 font-semibold text-[11px] block">
                Avg. ₹1–200 / Person
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors py-0.5">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('menu')} className="hover:text-white transition-colors py-0.5">
                  Menu & Dishes
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors py-0.5">
                  About Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="hover:text-white transition-colors py-0.5">
                  Ambience & Photos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors py-0.5">
                  Contact & Reserve
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Online Ordering Platforms */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Order Online
            </h4>
            <div className="space-y-2">
              <a
                href={restaurantConfig.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-stone-900 hover:bg-[#E23744]/20 border border-stone-800 hover:border-[#E23744]/50 text-white font-medium transition-colors"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E23744]" />
                  <span>Zomato</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href={restaurantConfig.swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-stone-900 hover:bg-[#FC8019]/20 border border-stone-800 hover:border-[#FC8019]/50 text-white font-medium transition-colors"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FC8019]" />
                  <span>Swiggy</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <button
                onClick={() => openOrderModal()}
                className="w-full py-2 rounded-xl bg-burgundy-800 hover:bg-burgundy-700 text-white font-semibold transition-colors text-center"
              >
                Order Popup
              </button>
            </div>
          </div>

          {/* Col 4: Location & Timings */}
          <div className="col-span-2 sm:col-span-1 space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Location & Hours
            </h4>
            <div className="space-y-2 text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{restaurantConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>11:00 AM – 11:00 PM Daily</span>
              </div>
              <div className="text-[11px] font-mono text-gold-300 bg-stone-900 px-2 py-1 rounded border border-stone-800 inline-block">
                {restaurantConfig.address.plusCode}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Services */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px] text-center sm:text-left">
          <p>© 2026 {restaurantConfig.name} ({restaurantConfig.hindiName}), Vidisha, MP. All rights reserved.</p>
          <p className="text-stone-400">
            Dine-in (3rd Floor) • Drive-through • No-contact Delivery
          </p>
        </div>

      </div>
    </footer>
  );
};
