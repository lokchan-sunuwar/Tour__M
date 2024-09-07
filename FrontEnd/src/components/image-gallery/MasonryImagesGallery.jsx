import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImages from './galleryimage';

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 3, 992: 4}}>
      <Masonry gutter='1rem'>
        {galleryImages.map((item, index) => (
          <img
            src={item}
            alt={`Gallery image ${index}`} // Improved alt text for accessibility
            key={index}
            style={{
              width: '100%',
              display: 'block',
              borderRadius: '10px'
            }}
            className="masnory__img" // Ensure correct class name
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
