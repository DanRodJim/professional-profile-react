import { useTranslation } from 'react-i18next';
import profilePic from '../assets/images/profile_picture.jpg';

function Main() {
  const { t } = useTranslation();
  
  return (
    <div className="content-main">
      <img 
        src={profilePic} 
        alt="Profile Picture" 
        className="content-image" 
      />
      
      <h2>{t('Hello and welcome to my profile page!')}</h2>
      <p>{t('main_intro')}</p>
    </div>
  );
}

export default Main;