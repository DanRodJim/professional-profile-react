import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  
  return (
    <div className="content-main">
      <h2>{t('About this page')}</h2>
      <p>{t('This project was made using React, CSS and JavaScript.')}</p>
      <p>{t('I did this to show some of my skills as Software Engineer.')}</p>
      <p>
        {t('If you want to know more about my work please contact me at my email: dgrj.tec@gmail.com')}
      </p>
      <p>{t('Or check the links in the footer of this page.')}</p>
    </div>
  );
}

export default About;