import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Studies() {
  const { t } = useTranslation();
  
  const [openCollapsible, setOpenCollapsible] = useState(null);
  
  const toggleCollapsible = (id) => {
    setOpenCollapsible(openCollapsible === id ? null : id);
  };
  
  // Lista de certificaciones
  const certifications = [
    {
      title: 'Learning Node.js',
      url: 'https://www.linkedin.com/learning/certificates/b7005846cfaf8257b8583e2ce0566b68382672415475fc2d8ed9a54bc2dd49db?trk=share_certificate',
      platform: 'LinkedIn Learning'
    },
    {
      title: 'GraphQL Essential Training',
      url: 'https://www.linkedin.com/learning/certificates/5a7fe2cae3d672865dcabba52076f340bf988e335d687e8ddc00e31b8374f322?trk=share_certificate',
      platform: 'LinkedIn Learning'
    },
    {
      title: 'Master TypeScript: Integration with Node',
      url: 'https://www.linkedin.com/learning/certificates/bc889e1ca844ab20b8c27e5de8d8431cee36920a6e78f6b54ddd6e539f639310?trk=share_certificate',
      platform: 'LinkedIn Learning'
    },
    {
      title: 'Microservices with a coffee',
      url: 'https://www.linkedin.com/learning/certificates/b83c8909f74365ef2ed1ea0a9c96dc704afafdc3f51dee788d963f68da8121ee?trk=share_certificate',
      platform: 'LinkedIn Learning'
    },
    {
      title: 'Azure: Microservices Essential',
      url: 'https://www.linkedin.com/learning/certificates/5cc9179c059b3a3e5a2b277a00b22517b12e56afff714c6dfbcbda435891be03?trk=share_certificate',
      platform: 'LinkedIn Learning'
    },
    {
      title: 'Master Python: Data Manipulation with Pandas',
      url: 'https://www.linkedin.com/learning/certificates/bd4f3006a8a7002fcb28cab017ae1c53770da6cbddc8537257fd74da9e6155ae?trk=share_certificate',
      platform: 'LinkedIn Learning'
    },
    {
      title: 'Leading with Vision',
      url: 'https://www.linkedin.com/learning/certificates/937b57b7a0ed754a08a476860ab3436c904012ad02b2909e59c3fe0308699256?trk=share_certificate',
      platform: 'LinkedIn Learning'
    },
    {
      title: 'OWASP TOP 10 Web 2021 + 2017',
      url: 'https://www.udemy.com/certificate/UC-c887db15-0bf6-4149-8ff9-f2cab5bc8ecc/',
      platform: 'Udemy'
    },
    {
      title: 'Python Workshop',
      url: 'https://drive.google.com/file/d/1juSU7NiDTSzf8GNqZFBntUXmb9EKKBoi/view?usp=sharing',
      platform: 'CapDevCR'
    },
    {
      title: 'AWS Serverless APIs & Apps - A Complete Introduction',
      url: 'https://www.udemy.com/certificate/UC-67af0c2a-acd0-438c-9a24-38db57fe6794/',
      platform: 'Udemy'
    }
  ];
  
  return (
    <>
      {}
      <div className="collapsible-wrapper">
        <button 
          type="button" 
          className={`collapsible ${openCollapsible === 'university' ? 'active' : ''}`}
          onClick={() => toggleCollapsible('university')}
        >
          {t('University')}
        </button>
        <div 
          className="collapsible-content"
          style={{
            maxHeight: openCollapsible === 'university' ? '1000px' : '0',
            opacity: openCollapsible === 'university' ? '1' : '0'
          }}
        >
          <p>{t('university_description')}</p>
        </div>
      </div>
      
      {}
      <div className="collapsible-wrapper">
        <button 
          type="button" 
          className={`collapsible ${openCollapsible === 'certifications' ? 'active' : ''}`}
          onClick={() => toggleCollapsible('certifications')}
        >
          {t('Certifications')}
        </button>
        <div 
          className="collapsible-content"
          style={{
            maxHeight: openCollapsible === 'certifications' ? '2000px' : '0',
            opacity: openCollapsible === 'certifications' ? '1' : '0'
          }}
        >
          <p>
            <ul className="certifications-list">
              {certifications.map((cert, index) => (
                <React.Fragment key={index}>
                  <li>
                    <a 
                      href={cert.url} 
                      title={`${cert.title} - ${cert.platform}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cert.title}
                    </a>
                  </li>
                  {index < certifications.length - 1 && <br />}
                </React.Fragment>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}

export default Studies;