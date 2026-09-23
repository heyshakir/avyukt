import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Star } from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';
import { ContactForm } from '../components/contact/ContactForm';

export const ContactPage: React.FC = () => {
  const whatsappUrl = `https://wa.me/${restaurantConfig.whatsapp}?text=${encodeURIComponent(
    restaurantConfig.whatsappMessage
  )}`;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy-50 border border-burgundy-100 text-burgundy-800 text-xs font-bold uppercase tracking-widest">
          <MapPin className="w-3.5 h-3.5 text-gold-600" />
          <span>Vidisha, Madhya Pradesh</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900">
          Contact & Visit {restaurantConfig.name}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          {restaurantConfig.hindiName} • 3rd Floor, Hotel Grand Ashok, Bus Stand, Sanchi Road. Rated {restaurantConfig.rating.stars} from {restaurantConfig.stats.totalReviews} reviews.
        </p>
      </div>

      {/* Main Grid: Details + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Contact Information & Action Cards */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
              Location & Details
            </h2>

            <div className="space-y-4">
              {/* Address & Plus Code */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-burgundy-50 text-burgundy-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                    Address
                  </h3>
                  <p className="text-sm text-stone-600 mt-0.5 leading-relaxed">
                    {restaurantConfig.address.full}
                  </p>
                  <p className="text-xs font-mono text-burgundy-800 font-bold mt-1">
                    Plus Code: {restaurantConfig.address.plusCode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-burgundy-50 text-burgundy-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                    Phone & Inquiries
                  </h3>
                  <p className="text-sm text-stone-900 mt-0.5 font-bold">
                    <a href={`tel:${restaurantConfig.phone}`} className="hover:text-burgundy-800">
                      {restaurantConfig.displayPhone}
                    </a>
                  </p>
                  <p className="text-xs text-stone-500">Call for table bookings & drive-through parcel pickup</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-burgundy-50 text-burgundy-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                    Opening Hours
                  </h3>
                  <p className="text-sm text-stone-600 mt-0.5">
                    {restaurantConfig.openingHours.days} <br />
                    <span className="font-semibold text-stone-900">{restaurantConfig.openingHours.hours}</span>
                  </p>
                </div>
              </div>

              {/* Rating & Pricing */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                    Rating & Cost
                  </h3>
                  <p className="text-sm text-stone-600 mt-0.5">
                    <strong>{restaurantConfig.rating.stars}</strong> based on <strong>{restaurantConfig.stats.totalReviews} Google Reviews</strong>
                  </p>
                  <p className="text-xs text-emerald-700 font-bold mt-0.5">
                    Average Cost: {restaurantConfig.priceRange}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Instant Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-100">
              <a
                href={`tel:${restaurantConfig.phone}`}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-white font-bold text-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>CALL: {restaurantConfig.displayPhone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>

              <a
                href={restaurantConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs border border-stone-200 transition-colors"
              >
                <Navigation className="w-4 h-4 text-burgundy-800" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

          </div>

          {/* Map Preview */}
          <div className="rounded-3xl overflow-hidden shadow-soft border border-stone-200 h-64 bg-stone-100">
            <iframe
              title="Google Map"
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

        {/* Right Col: Contact & Reservation Form */}
        <div className="lg:col-span-6">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};
