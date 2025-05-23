import React from 'react';
import { HeartIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-32 pt-16 border-t border-rose-100 text-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-xl">
        <HeartIcon className="w-8 h-8 text-rose-400 animate-pulse" />
      </div>
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-200"></div>
        <HeartIcon className="w-8 h-8 text-rose-400 transform hover:scale-110 transition-transform duration-300" />
        <p className="font-script text-3xl text-rose-600 hover:text-rose-700 transition-colors duration-300">Isaac & Noemi</p>
        <HeartIcon className="w-8 h-8 text-rose-400 transform hover:scale-110 transition-transform duration-300" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-200"></div>
      </div>
      <p className="text-gray-600 font-serif italic text-lg">
        Gràcies per compartir amb nosaltres este dia tan especial
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <span className="w-2 h-2 rounded-full bg-rose-300 animate-pulse"></span>
        <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
        <span className="w-2 h-2 rounded-full bg-rose-300 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
      </div>
    </footer>
  );
};

export default Footer;