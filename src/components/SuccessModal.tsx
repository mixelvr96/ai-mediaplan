import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

interface SuccessModalProps {
  email: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ email, onClose }) => {
  // Auto-close after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onClose]);

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
          SUCCESS! <br />CHECK YOUR EMAIL
        </h2>

        {/* Message */}
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Your personalized influencer mediaplan has been sent to{' '}
          <span className="font-semibold text-primary">{email}</span>.<br />
          Check your inbox (and spam folder just in case)!
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-accent hover:bg-yellow-400 text-primary font-heading font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-accent/50"
        >
          Got It!
        </button>

        {/* Auto-close indicator */}
        <p className="text-gray-400 text-sm mt-4">
          This message will close automatically in a few seconds
        </p>
      </div>
    </div>
  );
};

export default SuccessModal;
