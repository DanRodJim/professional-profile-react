import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  
  return (
    <div className="language-selector">
      <form>
        <select value={i18n.language} onChange={changeLanguage}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </form>
    </div>
  );
}

export default LanguageSelector;