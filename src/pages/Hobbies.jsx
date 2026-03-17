import { useTranslation } from 'react-i18next';
import Slider from '../components/Slider';

import travelImg from '../assets/images/travel.jpeg';
import soccerImg from '../assets/images/soccer.jpg';
import gamingImg from '../assets/images/videogames.jpg';
import animeImg from '../assets/images/animemanga.jpg';

function Hobbies() {
  const { t } = useTranslation();
  
  const hobbiesSlides = [
    {
      image: travelImg,
      title: 'Travel',
      description: 'I have visited some different countries like Japan, Denmark, Switzerland, among others.'
    },
    {
      image: soccerImg,
      title: 'Soccer',
      description: 'I frequently play soccer with friends and watch professional matches when my favorite teams play.'
    },
    {
      image: gamingImg,
      title: 'Gaming',
      description: 'I relax from long days playing some of my favorite video games. My favorite one is Dota 2.'
    },
    {
      image: animeImg,
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