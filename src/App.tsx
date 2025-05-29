import React from 'react';
import { Heart } from 'lucide-react';
import GaleriaDeImagenes from './components/GaleriaDeImagenes';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Encabezado para Isaac y Noemí */}
        <header className="text-center mb-12 animate-fade-in-down">
          <div className="relative">
            {/* Corazones decorativos */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <Heart className="w-6 h-6 text-rose-400 animate-pulse fill-current" />
            </div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-12 -translate-y-2">
              <Heart className="w-4 h-4 text-pink-400 animate-pulse fill-current" style={{animationDelay: '0.5s'}} />
            </div>
            <div className="absolute -top-1 left-1/2 transform translate-x-8 -translate-y-2">
              <Heart className="w-4 h-4 text-rose-500 animate-pulse fill-current" style={{animationDelay: '1s'}} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-script text-rose-800 mb-4 relative">
              Isaac & Noemí
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-rose-700 font-serif italic mb-2">
              ¡Feliz vida juntos!
            </p>
            
            <p className="text-gray-600 font-serif leading-relaxed max-w-2xl mx-auto">
              Que vuestro amor crezca cada día y que compartáis una vida llena de alegría, 
              complicidad y momentos inolvidables. ¡Enhorabuena por este nuevo capítulo juntos!
            </p>
            
            {/* Línea decorativa */}
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-rose-300"></div>
              <Heart className="w-5 h-5 text-rose-400 fill-current" />
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-rose-300"></div>
            </div>
          </div>
        </header>
        
        <GaleriaDeImagenes />
      </div>
      
      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;