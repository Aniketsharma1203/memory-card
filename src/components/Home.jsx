import React, { useState } from 'react';
import './style.css';
import ImageBox from './ImageBox';
import AniketImage from '../assets/Aniket.jpeg';
import Papa from '../assets/Papa.jpeg';
import Nana from '../assets/Nana.jpeg'
import Sisters from '../assets/Sisters.jpeg'
import Mamu from '../assets/Mamu.jpeg'
import Mami from '../assets/Mami.jpeg'
import Nani from '../assets/Nani.jpeg'
import Jonty from '../assets/Jonty.jpeg'
import Maa from '../assets/Maa.jpeg'
import Me from '../assets/Me.jpeg'
import VanarSena from '../assets/VanaSena.jpeg'
import MaaPaa from '../assets/MaaPaa.jpeg'

const images = [
  { name: 'Aniket', src: AniketImage },
  { name: 'Papa', src: Papa },
  { name: 'Sisters', src: Sisters },
  { name: 'Nana', src: Nana },
  { name: 'Mamu', src:Mamu },
  { name: 'Mami', src: Mami},
  { name: 'Nani', src: Nani },
  { name: 'Jonty', src: Jonty},
  { name: 'Maa', src: Maa},
  { name: 'Thrice', src: Me},
  { name: 'Vanar Sena', src: VanarSena},
  { name: 'MaaPaa', src: MaaPaa},
];

const shuffleArray = (array) => {
  return array.slice().sort(() => Math.random() - 0.5);
};

function Home() {
  const [shuffledImages, setShuffledImages] = useState(images);
  const [clickedImages, setClickedImages] = useState([]);
  const [score, setScore] = useState(0);

  const handleImageClick = (imageName) => {
    if (clickedImages.includes(imageName)) {
      setScore(0);
      setClickedImages([]);
    } else {
      setScore(score + 1);
      setClickedImages([...clickedImages, imageName]);
    }

    const shuffled = shuffleArray(shuffledImages);
    setShuffledImages(shuffled);
  };

  return (
    <div>
      <div className='left-text'>
        <h1><em>Pictures Memory Game</em></h1>
        <h4>Get points by clicking on the image but don't click twice.</h4>
      </div>
      <div className='imag'>
        {shuffledImages.map((image, index) => (
          <ImageBox key={index} image={image} onClick={() => handleImageClick(image.name)} />
        ))}
      </div>
      <div className='score-container'>
        <p>Score: {score}</p>
        {score === 0 && <p>Best Of Luck</p>}
        {score === images.length && <p>You Won!</p>}
      </div>
    </div>
  );
}

export default Home;
