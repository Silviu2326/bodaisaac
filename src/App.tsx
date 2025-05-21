import React from 'react';
import { HeartIcon } from 'lucide-react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import GuestForm from './components/GuestForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-gray-800 font-sans" data-testid="app-container">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <Header />
        <main className="my-12">
          <PhotoGallery />
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-script text-rose-800 mb-3 dark:text-rose-300">Comparte tus momentos</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Para que podamos recordar estos momentos especiales, nos encantaría que compartieras tus fotos o videos de nuestra boda.
              </p>
            </div>
            <GuestForm />
          </div>
        </main>
        <Footer />
      </div>
      <div className="fixed bottom-6 right-6 opacity-30 pointer-events-none">
        <HeartIcon className="w-24 h-24 text-rose-200 dark:text-rose-600" />
      </div>
    </div>
  );
}

export default App;