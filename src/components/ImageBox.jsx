import React from 'react';
import './style.css';

const ImageBox = ({ image, onClick }) => {
  return (
    <div className='image-box' onClick={onClick}>
      <img src={image.src} alt={image.name} />
      <p>{image.name}</p>
    </div>
  );
};

export default ImageBox;
