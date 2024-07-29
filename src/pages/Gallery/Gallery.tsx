import React from 'react';

// Menentukan tipe untuk kategori
type Categories = {
  [key: string]: string[];
};

// Mendefinisikan data kategori dengan jalur gambar yang benar
const categories: Categories = {
  'Landing Page': ['/images/portfolio/landing_page/1_landing_page.webp', '/images/portfolio/landing_page/2_landing_page.webp'],
  Marketplace: ['/images/portfolio/marketplace/1_pharma_pos.webp'],
};

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {Object.keys(categories).map((category) => (
        <div key={category} className="my-5 w-full">
          <h2 className="text-3xl font-semibold my-10 text-center">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories[category].map((image: string, index: number) => (
              <div
                key={index}
                className="relative w-full"
                style={{ paddingTop: '56.25%' }} // 16:9 Aspect Ratio (9 / 16 * 100)
              >
                <img src={image} alt={`${category} Slide ${index}`} className="absolute top-0 left-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white text-lg">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
