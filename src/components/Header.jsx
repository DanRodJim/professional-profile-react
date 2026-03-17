import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function Header() {
  const { t } = useTranslation();
  
  return (
    <header>
      <h2>{t('Daniel Gustavo Rodriguez Jimenez')}</h2>
      <h4>{t('Software Engineer')}</h4>
      <LanguageSelector />
    </header>
  );
}

export default Header;