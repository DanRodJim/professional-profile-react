import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function Nav() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <nav>
      {}
      <LanguageSelector />
      
      {}
      <button 
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {}
      <ul id="navMenu" className={menuOpen ? 'active' : ''}>
        <li>
          <NavLink 
            to="/" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {t('Main')}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/studies" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {t('Studies')}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/skills" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {t('Skills')}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/experience" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {t('Experience')}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/hobbies" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {t('Hobbies')}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {t('About this page')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;