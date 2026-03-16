import React from 'react';
import { useTranslation } from 'react-i18next';
import windriverLogo from '../assets/images/windriver-logo.jpg';
import golabsLogo from '../assets/images/golabs-logo.jpg';

function Experience() {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="content-main">
        <img 
          src={windriverLogo} 
          alt="Wind River" 
          className="experience-image" 
        />
        
        <h2>{t('Senior Software Engineer - Wind River')}</h2>
        <h3>{t('September 2020 - May 2024')}</h3>
        <p>
          {t('Software Engineer member of the team in charge of the backend for an authentication and authorization system for a large-scale project.')}
        </p>
        <p><strong>{t('Some of my responsibilities and achievements:')}</strong></p>
        <ul className="experience-list">
          <li>{t('Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.')}</li>
          <li>{t('Optimization of code performance to improve user experience and system efficiency.')}</li>
          <li>{t('Regularly reviewed peer code contributions, offering constructive feedback to improve overall product quality.')}</li>
          <li>{t('Worked with project manager, developers, quality assurance, and customers to resolve technical issues.')}</li>
        </ul>
        <p className="tech-stack">
          <strong>{t('Tech Stack:')}</strong> Node.js, TypeScript, PostgreSQL, Kafka, JWT, Mocha, Yup, Prisma, PyTest, Git, Jenkins
        </p>
      </div>
      
      <div className="content-main">
        <img 
          src={golabsLogo} 
          alt="GoLabs Tech" 
          className="experience-image" 
        />
        
        <h2>{t('Software Engineer Intern - GoLabs Tech')}</h2>
        <h3>{t('January 2020 - February 2020')}</h3>
        <p>
          {t('Three weeks of internship learning about the work environment and technologies like Ruby on Rails, Docker, and Git.')}
        </p>
        <p><strong>{t('Some of my responsibilities and achievements:')}</strong></p>
        <ul className="experience-list">
          <li>{t('Migration of a project from Ruby on Rail version 5 to Ruby on Rails version 6.')}</li>
          <li>{t('This internship was part of the prize for winning a programming contest.')}</li>
        </ul>
        <p className="tech-stack">
          <strong>{t('Tech Stack:')}</strong> Ruby On Rails, JavaScript, Docker, Git.
        </p>
      </div>
    </>
  );
}

export default Experience;