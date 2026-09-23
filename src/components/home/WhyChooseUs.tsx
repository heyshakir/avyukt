import React from 'react';
import { UtensilsCrossed, Car, ShieldCheck, Smartphone } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const services = [
    {
      icon: UtensilsCrossed,
      title: 'Dine-in',
      description: '3rd Floor indoor seating atop Hotel Grand Ashok.',
    },
    {
      icon: Car,
      title: 'Drive-through',
      description: 'Quick curbside parcel pickup on Sanchi Road.',
    },
    {
      icon: ShieldCheck,
      title: 'No-contact Delivery',
      description: 'Hygienic sealed packaging delivered across Vidisha.',
    },
    {
      icon: Smartphone,
      title: 'Online Ordering',
      description: 'Instant delivery dispatch on Swiggy and Zomato.',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-soft">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="space-y-2 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-burgundy-800 flex items-center justify-center mx-auto sm:mx-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-stone-900 text-sm">
                  {srv.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
