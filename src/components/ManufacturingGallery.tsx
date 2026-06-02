import React from 'react';

const photos = [
  {
    src: '/images/manufacturing/process-1.jpg',
    alt: 'Raw material inspection',
  },
  {
    src: '/images/manufacturing/process-2.jpg',
    alt: 'Fiber processing',
  },
  {
    src: '/images/manufacturing/process-3.jpg',
    alt: 'Weaving & dyeing',
  },
  {
    src: '/images/manufacturing/process-4.jpg',
    alt: 'Quality assurance testing',
  },
];

const ManufacturingGallery = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary dark:text-primary-200 mb-8">
          Manufacturing Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingGallery;