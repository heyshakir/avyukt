import React from 'react';
import { Phone, MessageCircle, Navigation, Clock, MapPin } from 'lucide-react';
import { restaurantConfig } from '../../config/restaurant';

export const QuickContact: React.FC = () => {
  const whatsappUrl = `https://wa.me/${restaurantConfig.whatsapp}?text=${encodeURIComponent(
    restaurantConfig.whatsappMessage
  )}`;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Visit & Contact
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                {restaurantConfig.hindiName} • 3rd Floor, Hotel Grand Ashok, Vidisha
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-burgundy-800 shrink-0 mt-0.5" />
                <span>{restaurantConfig.address.full}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-burgundy-800 shrink-0" />
                <span>Open Daily: 11:00 AM – 11:00 PM</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-burgundy-800 shrink-0" />
                <a href={`tel:${restaurantConfig.phone}`} className="font-semibold text-stone-900 hover:text-burgundy-800">
                  {restaurantConfig.displayPhone}
                </a>
              </div>
            </div>

            {/* 3 Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={`tel:${restaurantConfig.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-white font-semibold text-xs transition-all active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs transition-all active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={restaurantConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs border border-stone-200 transition-all active:scale-95"
              >
                <Navigation className="w-3.5 h-3.5 text-burgundy-800" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-6">
            <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100">
              <iframe
                title="Avyukt Restaurant Location Map"
                src={restaurantConfig.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
