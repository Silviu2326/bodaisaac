import React from 'react';
import { HeartIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-32 pt-16 border-t border-rose-100 dark:border-slate-700 text-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 rounded-full p-4 shadow-xl dark:shadow-rose-500/10">
        <HeartIcon className="w-8 h-8 text-rose-400 dark:text-rose-500 animate-pulse" />
      </div>
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-200 dark:to-rose-700/50"></div>
        <HeartIcon className="w-8 h-8 text-rose-400 dark:text-rose-500 transform hover:scale-110 transition-transform duration-300" />
        <p className="font-script text-3xl text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors duration-300">Isaac & Noemi</p>
        <HeartIcon className="w-8 h-8 text-rose-400 dark:text-rose-500 transform hover:scale-110 transition-transform duration-300" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-200 dark:to-rose-700/50"></div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 font-serif italic text-lg">
        Gracias por compartir con nosotros este día tan especial
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <span className="w-2 h-2 rounded-full bg-rose-300 dark:bg-rose-600 animate-pulse"></span>
        <span className="w-2 h-2 rounded-full bg-rose-400 dark:bg-rose-500 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
        <span className="w-2 h-2 rounded-full bg-rose-300 dark:bg-rose-600 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
      </div>
    </footer>
  );
};

export default Footer;