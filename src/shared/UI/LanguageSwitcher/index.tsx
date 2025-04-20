import { useLanguage } from "../../../features/language/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      <button 
        onClick={toggleLanguage}
        style={{ fontWeight: language === "ru" ? "bold" : "normal" }}
      >
        Рус
      </button>
      <button 
        onClick={toggleLanguage}
        style={{ fontWeight: language === "en" ? "bold" : "normal" }}
      >
        Eng
      </button>
    </div>
  );
};
