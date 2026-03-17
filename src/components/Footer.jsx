import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer>
      <span className="footer-text">
        {t('Daniel Gustavo Rodriguez Jimenez')}
      </span>
      <div className="footer-socials">
        <a 
          href="https://github.com/danrodjim" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a 
          href="https://linkedin.com/in/daniel-gustavo-rodriguez-jimenez" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;