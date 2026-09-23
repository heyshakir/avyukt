import React from 'react';
import { Sparkles, ShieldCheck, UtensilsCrossed, Car, Smartphone } from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';
import { useOrder } from '../context/OrderContext';

export const AboutPage: React.FC = () => {
  const { openOrderModal, setActiveTab } = useOrder();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16">
      
      {/* Hero Brand Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-100 text-burgundy-800 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Vidisha, Madhya Pradesh • {restaurantConfig.hindiName}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Made With Passion. <br />
            <span className="italic text-burgundy-800">Served With Warmth.</span>
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Welcome to <strong className="text-stone-900">{restaurantConfig.name} ({restaurantConfig.hindiName})</strong>, located on the 3rd Floor of Hotel Grand Ashok, Sanchi Road, Vidisha. With a proud <strong className="text-stone-900">{restaurantConfig.rating.stars} rating from {restaurantConfig.stats.totalReviews} customer reviews</strong>, we are dedicated to serving wholesome North Indian meals, homestyle dals, crispy snacks, and refreshing cold coffees.
          </p>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Our pocket-friendly dining philosophy (<strong className="text-stone-900">{restaurantConfig.priceRange}</strong>) guarantees that families, college students, travelers along Sanchi Road, and local food enthusiasts can enjoy high-quality food in a hygienic, relaxed rooftop setting or right at home.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('menu')}
              className="px-6 py-3 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-white font-bold text-xs sm:text-sm shadow-soft transition-all"
            >
              Explore Our Menu
            </button>
            <button
              onClick={() => openOrderModal()}
              className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm border border-stone-200 transition-all"
            >
              Order on Swiggy / Zomato
            </button>
          </div>
        </div>

        {/* Big Food & Interior Photo */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-200 aspect-4/5">
            <img
              src="/gallery/designer-greenery-interior.jpg"
              alt="Avyukt Restaurant Dining Hall"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-stone-200 max-w-xs">
            <p className="font-serif italic font-bold text-stone-900 text-sm">
              "{restaurantConfig.tagline}"
            </p>
            <p className="text-xs text-stone-500 mt-1">
              3rd Floor, Hotel Grand Ashok, Vidisha, MP
            </p>
          </div>
        </div>
      </div>

      {/* Stats Counter Section */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-5xl font-extrabold text-gold-400">
              {restaurantConfig.rating.stars}
            </span>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-300">
              Google Rating
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-5xl font-extrabold text-gold-400">
              {restaurantConfig.stats.totalReviews}
            </span>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-300">
              Customer Reviews
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-5xl font-extrabold text-gold-400">
              ₹1–200
            </span>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-300">
              Avg. Per Person
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-5xl font-extrabold text-gold-400">
              4 Services
            </span>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-300">
              Dine-in • Drive-thru • Delivery
            </p>
          </div>
        </div>
      </div>

      {/* Services & Kitchen Principles */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-burgundy-800 uppercase tracking-widest">
            Complete Hospitality
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Our Core Services in Vidisha
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Designed for convenience whether you are catching a bus, traveling along Sanchi Road, or enjoying family dinner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">
              Dine-in
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              3rd Floor scenic indoor seating at Hotel Grand Ashok with quick table service.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">
              Drive-through
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Call ahead at 090391 21277 for quick curbside and drive-through meal parcel pickup.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">
              No-contact Delivery
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Hygienic and sealed packaging for food safety delivered across Vidisha.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-soft space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">
              Online Ordering
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dispatched with live order tracking on both Zomato and Swiggy platforms.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
