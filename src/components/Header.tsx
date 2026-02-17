import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="https://zorka.agency/?utm_source=landing&utm_medium=ai-mediaplan&utm_campaign=promo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="Visit Zorka.Agency website"
        >
          <img
            src="/Zorka_RU_Black.png"
            alt="Zorka.Agency Logo"
            className="h-8 md:h-10"
          />
        </a>
        <span className="hidden sm:block text-xs md:text-sm font-heading font-semibold text-primary/60 tracking-wide">
          Zorka.Agency is the top-rated influencer marketing agency
        </span>
      </div>
    </header>
  );
};

export default Header;
