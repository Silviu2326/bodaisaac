import React from 'react';
import { Heart } from 'lucide-react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import GuestForm from './components/GuestForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 text-gray-800 font-sans relative overflow-hidden">
      {/* Elements decoratius animats de fons */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-rose-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-64 left-1/4 w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-pink-300 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-20 left-16 w-2 h-2 bg-rose-200 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Gradient subtil superposat */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-rose-100/20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 sm:py-12 relative z-10">
        {/* Header amb animació suau */}
        <div className="animate-fade-in-down">
          <Header />
        </div>
        
        <main className="my-12">
          {/* PhotoGallery amb animació d'entrada */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <PhotoGallery />
          </div>
          
          {/* Secció del formulari amb animacions escalonades */}
          <div className="mt-16 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center mb-8 relative">
              {/* Cors decoratius al voltant del títol */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <Heart className="w-4 h-4 text-rose-300 animate-pulse fill-current" />
              </div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-8 -translate-y-2">
                <Heart className="w-3 h-3 text-pink-300 animate-pulse fill-current" style={{animationDelay: '0.5s'}} />
              </div>
              <div className="absolute -top-1 left-1/2 transform translate-x-5 -translate-y-2">
                <Heart className="w-3 h-3 text-rose-400 animate-pulse fill-current" style={{animationDelay: '1s'}} />
              </div>
              
              <h2 className="text-2xl font-script text-rose-800 mb-3 relative">
                Compartix els teus moments
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Per a que puguem recordar estos moments especials, ens encantaria que compartires les teues fotos o vídeos de la nostra boda.
              </p>
            </div>
            
            {/* Formulari amb ombra suau i vores arrodonides */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-100 p-6 hover:shadow-xl transition-all duration-500">
              <GuestForm />
            </div>
          </div>
        </main>
        
        {/* Footer amb animació */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <Footer />
        </div>
      </div>
      
      {/* Cor flotant millorat amb animació romàntica */}
      <div className="fixed bottom-6 right-6 opacity-40 pointer-events-none">
        <div className="relative">
          <Heart className="w-24 h-24 text-rose-300 animate-heart-beat fill-current" />
          {/* Cors més menuts que orbiten */}
          <Heart className="w-6 h-6 text-pink-400 absolute -top-2 -right-2 animate-float fill-current" />
          <Heart className="w-4 h-4 text-rose-400 absolute -bottom-1 -left-1 animate-float fill-current" style={{animationDelay: '1s'}} />
        </div>
      </div>

      {/* Estil personalitzat per a animacions */}
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heart-beat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-heart-beat {
          animation: heart-beat 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;