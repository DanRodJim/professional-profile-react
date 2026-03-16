import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('hard');
  
  const hardSkills = [
    { name: 'Node.js', level: 8 },
    { name: 'Python', level: 8 },
    { name: 'Express', level: 8 },
    { name: 'TypeScript', level: 8 },
    { name: 'JavaScript', level: 8 },
    { name: 'PostgreSQL', level: 8 },
    { name: 'Git', level: 7 },
    { name: 'PrismaORM', level: 7 },
    { name: 'Django', level: 5 },
    { name: 'SQLAlchemy', level: 5 },
    { name: 'MongoDB', level: 5 },
    { name: 'HTML', level: 4 },
    { name: 'Amazon Web Services', level: 4 },
    { name: 'GraphQL', level: 3 },
    { name: 'Pandas', level: 3 },
    { name: 'C++', level: 3 },
    { name: 'CSS', level: 3 },
    { name: 'Java', level: 2 },
    { name: 'C#', level: 2 },
    { name: 'Docker', level: 2 },
    { name: 'Angular', level: 1 }
  ];
  
  const softSkills = [
    'Problem Solving',
    'Adaptative',
    'Continuos Learning',
    'Assertive communication',
    'Empathic',
    'Proactive',
    'Time management and self-management',
    'Critical thinking',
    'Responsible',
    'Teamwork and Colaboration',
    'Focused on solutions',
    'Attention to detail'
  ];
  
  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button 
          className={`tab-btn ${activeTab === 'hard' ? 'active' : ''}`}
          onClick={() => setActiveTab('hard')}
          data-tab="tab-skills"
        >
          {t('Hard Skills')}
        </button>
        <button 
          className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
          onClick={() => setActiveTab('soft')}
          data-tab="tab-other"
        >
          {t('Soft Skills')}
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'hard' && (
          <div id="tab-skills" className="tab-panel active">
            <h2>{t('This are my hard skills and the level of mastering I have on them:')}</h2>
            <ul className="skills-list">
              {hardSkills.map((skill, index) => (
                <li key={index}>
                  <span className="skill-name">{skill.name}</span>
                  <span 
                    className="stars" 
                    data-level={skill.level}
                    role="img"
                    aria-label={`Level ${skill.level} out of 10 in ${skill.name}`}
                  >
                    <span className="stars-tooltip">{skill.name} {skill.level}/10</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'soft' && (
          <div id="tab-other" className="tab-panel active">
            <h2>{t('These are some attributes that define me as a worker and as a person:')}</h2>
            <ul className="skills-list">
              {softSkills.map((skill, index) => (
                <li key={index}>
                  <span className="skill-name">{t(skill)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;