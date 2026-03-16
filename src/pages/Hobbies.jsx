import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from '../components/Slider';

function Hobbies() {
  const { t } = useTranslation();
  
  const hobbiesSlides = [
    {
      image: '/src/assets/images/travel.jpeg',
      title: 'Travel',
      description: 'I have visited some different countries like Japan, Denmark, Switzerland, among others.'
    },
    {
      image: '/src/assets/images/soccer.jpg',
      title: 'Soccer',
      description: 'I frequently play soccer with friends and watch professional matches when my favorite teams play.'
    },
    {
      image: '/src/assets/images/videogames.jpg',
      title: 'Gaming',
      description: 'I relax from long days playing some of my favorite video games. My favorite one is Dota 2.'
    },
    {
      image: '/src/assets/images/animemanga.jpg',
      title: 'Anime and Manga',
      description: 'I have watched anime and read manga since my childhood and I still enjoy it a lot.'
    }
  ];
  
  return (
    <div className="content-main">
      <h2>{t('My Hobbies & Interests')}</h2>
      <Slider slides={hobbiesSlides} />
    </div>
  );
}

export default Hobbies;