import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  emailOrPhone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  emailOrPhone?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    emailOrPhone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = 'Please enter your phone number or email';
    } else {
      // Basic check if it's either an email or a valid 10-digit phone
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailOrPhone);
      const isPhone = /^[0-9+\-\s()]{8,15}$/.test(formData.emailOrPhone);
      if (!isEmail && !isPhone) {
        newErrors.emailOrPhone = 'Please provide a valid email or phone number';
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message with at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Mock network submission (can easily be replaced by fetch('https://formspree.io/f/YOUR_ID', ...))
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setIsSuccess(true);
      setFormData({
        name: '',
        emailOrPhone: '',
        subject: 'General Inquiry',
        message: '',
      });
    } catch (err) {
      setServerError('An error occurred while sending your message. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-soft">
      {isSuccess ? (
        <div className="text-center py-8 space-y-4 animate-fade-in">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Message Received With Warmth!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              Thank you for contacting Avyukt. Our team will get back to you shortly regarding your inquiry or table reservation.
            </p>
          </div>
          <button
            onClick={() => setIsSuccess(false)}
            className="px-5 py-2.5 rounded-xl bg-burgundy-800 text-white font-bold text-xs hover:bg-burgundy-900 transition-colors"
          >
            Send Another Note
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              For catering inquiries, table reservations, or private party dining.
            </p>
          </div>

          {serverError && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.name
                  ? 'border-rose-300 bg-rose-50/30 focus:ring-rose-200'
                  : 'border-stone-200 bg-[#FAF7F2] focus:border-burgundy-800 focus:ring-burgundy-100'
              }`}
            />
            {errors.name && (
              <p className="text-xs text-rose-600 mt-1 font-medium">{errors.name}</p>
            )}
          </div>

          {/* Contact Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Phone Number or Email *
            </label>
            <input
              type="text"
              placeholder="e.g. +91 98765 43210 or your@email.com"
              value={formData.emailOrPhone}
              onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.emailOrPhone
                  ? 'border-rose-300 bg-rose-50/30 focus:ring-rose-200'
                  : 'border-stone-200 bg-[#FAF7F2] focus:border-burgundy-800 focus:ring-burgundy-100'
              }`}
            />
            {errors.emailOrPhone && (
              <p className="text-xs text-rose-600 mt-1 font-medium">{errors.emailOrPhone}</p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Subject
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-[#FAF7F2] text-sm text-stone-800 focus:outline-none focus:border-burgundy-800 focus:ring-2 focus:ring-burgundy-100"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Table Reservation">Table Reservation</option>
              <option value="Private Dining / Party">Private Dining / Party</option>
              <option value="Catering & Bulk Order">Catering & Bulk Order</option>
              <option value="Feedback / Compliments">Feedback / Compliments</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Message *
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about date, party size, dietary requests or your inquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.message
                  ? 'border-rose-300 bg-rose-50/30 focus:ring-rose-200'
                  : 'border-stone-200 bg-[#FAF7F2] focus:border-burgundy-800 focus:ring-burgundy-100'
              }`}
            />
            {errors.message && (
              <p className="text-xs text-rose-600 mt-1 font-medium">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-white font-bold text-sm shadow-burgundy flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Note...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
