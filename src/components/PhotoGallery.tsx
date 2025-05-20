import React from 'react';

const PhotoGallery: React.FC = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
      alt: "Pareja en la playa al atardecer",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
      alt: "Pareja en un jardín",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3650469/pexels-photo-3650469.jpeg",
      alt: "Manos con anillos de boda",
    },
  ];

  return (
    <section className="mt-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="photo-frame group"
            style={{ 
              transitionDelay: `${index * 100}ms`,
              transform: `perspective(1000px) rotateY(${index % 2 ? 2 : -2}deg)`
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
              <p className="text-white text-center font-serif text-xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {photo.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;