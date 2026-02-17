import React from 'react';
import { FaYoutube, FaArrowDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-section');
    chatSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-primary overflow-hidden py-20 md:py-32">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#FCCD03 1px, transparent 1px), linear-gradient(to right, #FCCD03 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 text-center">
        {/* YouTube badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
          <FaYoutube className="text-red-500 text-xl flex-shrink-0" />
          <span className="text-white text-sm font-heading font-semibold tracking-wider uppercase">
            YouTube Influencer Database · 300,000+ Creators
          </span>
        </div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          GET YOUR MEDIAPLAN <br className="hidden md:block" />
          IN <span className="text-accent">10 MINUTES</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto mb-10">
          Just type your request in the chat — and we'll find the right bloggers for you
        </p>

        <button
          onClick={scrollToChat}
          className="bg-accent hover:bg-yellow-300 text-primary font-heading font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-accent/30 focus:outline-none focus:ring-4 focus:ring-accent/50"
          aria-label="Start chatting with our bot"
        >
          Get My Mediaplan
        </button>

        {/* Scroll hint */}
        <div className="mt-16 flex justify-center animate-bounce">
          <FaArrowDown className="text-white/30 text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
