import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

interface SuccessModalProps {
  email: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ email, onClose }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-slide-up relative text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close success message"
        >
          <FaTimes className="text-2xl" />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <FaCheckCircle className="text-6xl text-green-500 animate-bounce" />
            {/* Confetti effect */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-0 w-2 h-2 bg-accent rounded-full animate-ping"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>

        {/* Header */}
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
          WE'RE ON IT! <br />CHECK YOUR EMAIL SOON
        </h2>

        {/* Message */}
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Your personalized influencer mediaplan is being generated right now.
          As soon as it's ready, we'll send it to{' '}
          <span className="font-semibold text-primary">{email}</span>.
        </p>

        {/* Delivery note */}
        <p className="text-gray-500 text-sm mb-6">
          Generation usually takes <span className="font-semibold text-primary">10–15 minutes</span>. Don't forget to check your spam folder!
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-accent hover:bg-yellow-400 text-primary font-heading font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-accent/50"
        >
          Got It!
        </button>

      </div>
    </div>
  );
};

export default SuccessModal;
