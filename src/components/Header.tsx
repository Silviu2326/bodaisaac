import React from 'react';
import { HeartIcon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-rose-200 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="mb-8 opacity-90 animate-bounce">
        <HeartIcon className="w-16 h-16 mx-auto text-rose-400 drop-shadow-lg transform hover:scale-110 transition-transform duration-300" />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-script text-rose-800 mb-8 text-shadow hover:text-glow transition-all duration-500">
        Bienvenidos a la Boda de
      </h1>
      <div className="flex items-center justify-center gap-8 sm:gap-10">
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-script text-gray-700 hover:text-rose-600 transition-colors duration-500 text-shadow transform hover:scale-105">Isaac</h2>
        <HeartIcon className="w-10 h-10 sm:w-12 sm:h-12 text-rose-400 animate-pulse drop-shadow-lg" />
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-script text-gray-700 hover:text-rose-600 transition-colors duration-500 text-shadow transform hover:scale-105">Noemi</h2>
      </div>
      <div className="mt-16 max-w-2xl mx-auto px-6">
        <p className="text-2xl text-gray-600 italic font-serif leading-relaxed">
          "El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección."
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-rose-300 animate-pulse"></span>
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-2 h-2 rounded-full bg-rose-300 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;