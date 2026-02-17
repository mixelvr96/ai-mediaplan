import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaTimes, FaExclamationTriangle } from 'react-icons/fa';
import { contactFormSchema, ContactFormData, getCorporateEmailWarning } from '../utils/validation';
import { submitForm } from '../utils/mockApi';

interface ContactFormProps {
  onSubmit: (email: string) => void;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailWarning, setEmailWarning] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const emailValue = watch('email');

  // Check for corporate email warning
  useEffect(() => {
    if (emailValue && !errors.email) {
      const warning = getCorporateEmailWarning(emailValue);
      setEmailWarning(warning);
    } else {
      setEmailWarning(null);
    }
  }, [emailValue, errors.email]);

  const onFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await submitForm(data);

      if (response.success) {
        onSubmit(data.email);
      } else {
        setSubmitError(response.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-slide-up relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close form"
        >
          <FaTimes className="text-2xl" />
        </button>

        {/* Header */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
          Get Your Influencer List
        </h2>
        <p className="text-gray-600 mb-6">
          Enter your details below. Your mediaplan is being generated — it takes 10–15 minutes. We'll send it to your email the moment it's ready.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Name *
            </label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Corporate Email *
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="john@company.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
            {emailWarning && !errors.email && (
              <div className="flex items-start space-x-2 mt-2 text-yellow-600 text-sm">
                <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
                <span>{emailWarning}</span>
              </div>
            )}
          </div>

          {/* Submit Error */}
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
              {submitError}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-yellow-400 text-primary font-heading font-semibold text-lg px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                <span>Sending...</span>
              </span>
            ) : (
              'Send Me the Mediaplan'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
