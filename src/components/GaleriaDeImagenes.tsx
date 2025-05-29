import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

// Importamos todas las imágenes de la carpeta imagenes22
import chupito from '../fotos/imagenes22/Chupito_1748132011430_370.jpeg';
import cuarteto from '../fotos/imagenes22/Cuarteto_de_peluchitos_1748113486469_859.jpeg';
import davinia1 from '../fotos/imagenes22/Davinia_1748112232617_272.jpg';
import davinia2 from '../fotos/imagenes22/Davinia_1748112306148_609.jpg';
import elTrio from '../fotos/imagenes22/El_trio_de_Peluchines_1748113294911_537.jpeg';
import joseGarcia from '../fotos/imagenes22/Jose_Garcia_Montaner_1748112603417_426.jpeg';
import joseLuis1 from '../fotos/imagenes22/Jose_Luis__1748113033954_472.jpg';
import joseLuis2 from '../fotos/imagenes22/Jose_Luis__1748113034430_782.jpg';
import joseLuis3 from '../fotos/imagenes22/Jose_Luis__1748113034629_536.jpg';
import joseLuis4 from '../fotos/imagenes22/Jose_Luis__1748113034832_359.jpg';
import joseLuis5 from '../fotos/imagenes22/Jose_Luis__1748113035216_713.jpg';
import mangeles from '../fotos/imagenes22/MANGELES__1748113404056_202.jpg';
import mariaPerez1 from '../fotos/imagenes22/Maria_Perez__1748131900769_754.jpg';
import mariaPerez2 from '../fotos/imagenes22/Maria_Perez__1748131948120_830.jpg';
import mariaPerez3 from '../fotos/imagenes22/Maria_Perez__1748131948599_715.jpg';
import mariaPerez4 from '../fotos/imagenes22/Maria_Perez__1748131949010_610.jpg';
import mariaPerez5 from '../fotos/imagenes22/Maria_Perez__1748132014838_597.jpg';
import mariaPerez6 from '../fotos/imagenes22/Maria_Perez__1748132015450_685.jpg';
import mariaPerez7 from '../fotos/imagenes22/Maria_Perez__1748132015995_139.jpg';
import mariaRomero1 from '../fotos/imagenes22/Maria_Romero__1748112636307_336.jpg';
import mariaRomero2 from '../fotos/imagenes22/Maria_Romero__1748112640719_665.jpg';
import mariaRomero3 from '../fotos/imagenes22/Maria_Romero__1748112641017_58.jpg';
import mariaRomero4 from '../fotos/imagenes22/Maria_Romero__1748112641296_145.jpg';
import paco1 from '../fotos/imagenes22/Paco_1748112338642_9.jpg';
import paco2 from '../fotos/imagenes22/Paco_1748112520024_744.jpeg';
import sheyla1 from '../fotos/imagenes22/Sheyla_tamarit_cervera_1748117895011_499.jpeg';
import sheyla2 from '../fotos/imagenes22/Sheyla_tamarit_cervera_1748117895613_647.jpeg';
import sheyla3 from '../fotos/imagenes22/Sheyla_tamarit_cervera_1748117896050_393.jpeg';
import taulaMasclet from '../fotos/imagenes22/Taula_Masclet_1748118041068_838.jpeg';
import titis1 from '../fotos/imagenes22/Titis_1748128934110_836.jpeg';
import titis2 from '../fotos/imagenes22/Titis_1748128934688_270.jpeg';
import andreu1 from '../fotos/imagenes22/andreubatallerbochons@gmail.com_1748112548917_230.jpg';
import andreu2 from '../fotos/imagenes22/andreubatallerbochons@gmail.com_1748112549304_572.jpg';
import andreu3 from '../fotos/imagenes22/andreubatallerbochons@gmail.com_1748112549540_435.jpg';
import andreu4 from '../fotos/imagenes22/andreubatallerbochons@gmail.com_1748112549993_830.jpg';
import andreu5 from '../fotos/imagenes22/andreubatallerbochons@gmail.com_1748112550343_807.jpg';
import andreu6 from '../fotos/imagenes22/andreubatallerbochons@gmail.com_1748112550597_777.jpg';
import andreu7 from '../fotos/imagenes22/andreubatallerbochons@gmail.com_1748112550959_425.jpg';
import andreu8 from '../fotos/imagenes22/andreubatallerbochons@gmail.com_1748112551280_4.jpg';
import andreu9 from '../fotos/imagenes22/andreubatallerbochons@gmail.com_1748112551573_887.jpg';
import andreu10 from '../fotos/imagenes22/andreubatallerbochons@gmail.com_1748112551902_906.jpg';

// Importamos los videos
import mariaRomeroVideo1 from '../fotos/imagenes22/Maria_Romero__1748112636793_376.mp4';
import mariaRomeroVideo2 from '../fotos/imagenes22/Maria_Romero__1748112638136_621.mp4';
import mariaRomeroVideo3 from '../fotos/imagenes22/Maria_Romero__1748112639265_298.mp4';
import mariaRomeroVideo4 from '../fotos/imagenes22/Maria_Romero__1748112640181_104.mp4';
import sheylaVideo from '../fotos/imagenes22/Sheyla_tamarit_cervera_1748117896794_638.mov';

interface MediaItem {
  id: number;
  src: string;
  alt: string;
  type: 'image' | 'video';
}

const GaleriaDeImagenes: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const mediaItems: MediaItem[] = [
    { id: 1, src: chupito, alt: 'Chupito', type: 'image' },
    { id: 2, src: cuarteto, alt: 'Cuarteto de peluchitos', type: 'image' },
    { id: 3, src: davinia1, alt: 'Davinia', type: 'image' },
    { id: 4, src: davinia2, alt: 'Davinia', type: 'image' },
    { id: 5, src: elTrio, alt: 'El trio de Peluchines', type: 'image' },
    { id: 6, src: joseGarcia, alt: 'Jose Garcia Montaner', type: 'image' },
    { id: 7, src: joseLuis1, alt: 'Jose Luis', type: 'image' },
    { id: 8, src: joseLuis2, alt: 'Jose Luis', type: 'image' },
    { id: 9, src: joseLuis3, alt: 'Jose Luis', type: 'image' },
    { id: 10, src: joseLuis4, alt: 'Jose Luis', type: 'image' },
    { id: 11, src: joseLuis5, alt: 'Jose Luis', type: 'image' },
    { id: 12, src: mangeles, alt: 'Mangeles', type: 'image' },
    { id: 13, src: mariaPerez1, alt: 'Maria Perez', type: 'image' },
    { id: 14, src: mariaPerez2, alt: 'Maria Perez', type: 'image' },
    { id: 15, src: mariaPerez3, alt: 'Maria Perez', type: 'image' },
    { id: 16, src: mariaPerez4, alt: 'Maria Perez', type: 'image' },
    { id: 17, src: mariaPerez5, alt: 'Maria Perez', type: 'image' },
    { id: 18, src: mariaPerez6, alt: 'Maria Perez', type: 'image' },
    { id: 19, src: mariaPerez7, alt: 'Maria Perez', type: 'image' },
    { id: 20, src: mariaRomero1, alt: 'Maria Romero', type: 'image' },
    { id: 21, src: mariaRomero2, alt: 'Maria Romero', type: 'image' },
    { id: 22, src: mariaRomero3, alt: 'Maria Romero', type: 'image' },
    { id: 23, src: mariaRomero4, alt: 'Maria Romero', type: 'image' },
    { id: 24, src: paco1, alt: 'Paco', type: 'image' },
    { id: 25, src: paco2, alt: 'Paco', type: 'image' },
    { id: 26, src: sheyla1, alt: 'Sheyla Tamarit Cervera', type: 'image' },
    { id: 27, src: sheyla2, alt: 'Sheyla Tamarit Cervera', type: 'image' },
    { id: 28, src: sheyla3, alt: 'Sheyla Tamarit Cervera', type: 'image' },
    { id: 29, src: taulaMasclet, alt: 'Taula Masclet', type: 'image' },
    { id: 30, src: titis1, alt: 'Titis', type: 'image' },
    { id: 31, src: titis2, alt: 'Titis', type: 'image' },
    { id: 32, src: andreu1, alt: 'Andreu', type: 'image' },
    { id: 33, src: andreu2, alt: 'Andreu', type: 'image' },
    { id: 34, src: andreu3, alt: 'Andreu', type: 'image' },
    { id: 35, src: andreu4, alt: 'Andreu', type: 'image' },
    { id: 36, src: andreu5, alt: 'Andreu', type: 'image' },
    { id: 37, src: andreu6, alt: 'Andreu', type: 'image' },
    { id: 38, src: andreu7, alt: 'Andreu', type: 'image' },
    { id: 39, src: andreu8, alt: 'Andreu', type: 'image' },
    { id: 40, src: andreu9, alt: 'Andreu', type: 'image' },
    { id: 41, src: andreu10, alt: 'Andreu', type: 'image' },
    // Videos
    { id: 42, src: mariaRomeroVideo1, alt: 'Maria Romero - Video', type: 'video' },
    { id: 43, src: mariaRomeroVideo2, alt: 'Maria Romero - Video', type: 'video' },
    { id: 44, src: mariaRomeroVideo3, alt: 'Maria Romero - Video', type: 'video' },
    { id: 45, src: mariaRomeroVideo4, alt: 'Maria Romero - Video', type: 'video' },
    { id: 46, src: sheylaVideo, alt: 'Sheyla Tamarit Cervera - Video', type: 'video' },
  ];

  const openLightbox = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  return (
    <>
      <section className="mt-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-script text-rose-800 mb-4">
            Galeria d'Imatges i Vídeos
          </h2>
          <p className="text-gray-600 font-serif italic">
            Moments especials compartits pels nostres convidats
          </p>
          <div className="mt-4 w-24 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mediaItems.map((media, index) => (
            <div 
              key={media.id} 
              className="photo-frame group cursor-pointer relative"
              style={{ 
                transitionDelay: `${index * 50}ms`,
              }}
              onClick={() => openLightbox(media)}
            >
              {media.type === 'image' ? (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              ) : (
                <>
                  <video
                    src={media.src}
                    className="w-full h-64 object-cover"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className="w-12 h-12 text-white opacity-80" />
                  </div>
                </>
              )}
              <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-center font-serif text-sm tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-black/50 px-3 py-1 rounded-full">
                  {media.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-rose-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video
                src={selectedMedia.src}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                controls
                autoPlay
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-center font-serif text-lg">
                {selectedMedia.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GaleriaDeImagenes;