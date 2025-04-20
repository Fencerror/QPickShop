import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useLanguage } from "../../features/language/LanguageContext";

export const Footer = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <footer className={styles["catalog-footer"]}>
      <div className={styles["shop-name-text"]}>
        <h3><b>QPICK</b></h3>
      </div>

      <div className={styles["footer-links"]}>
        <div className={styles["footer-links-column"]}>
          <a href="#">{language === "en" ? "Favourites" : "Избранное"}</a>
          <Link to="/cart">{language === "en" ? "Cart" : "Корзина"}</Link>
          <a href="#">{language === "en" ? "Contacts" : "Контакты"}</a>
        </div>

        <p className={styles["footer-lang-text"]}>
          {language === "en" ? "Terms of Service" : "Условия сервиса"}
        </p>
        <div className={styles["footer-lang-buttons"]}>
          <p className={styles["footer-about-second-text"]}>
            <img src="assets/logos/planet.svg" alt="planet-logo" /> 
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (language !== "ru") {
                  setLanguage("ru");
                }
              }}
            >
              <span style={{ color: language === "ru" ? "#FFA542" : "inherit",  }}>Рус</span>
            </a> 
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (language !== "en") {
                  setLanguage("en");
                }
              }}
            >
              <span style={{ color: language === "en" ? "#FFA542" : "inherit" }}>Eng</span>
            </a>
          </p>
        </div>
      </div>

      <div className={styles["footer-socials"]}>
        <a 
          href="https://vk.com/stepan_orlow" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="assets/logos/VK.svg" alt="VK" />
        </a>
        <a 
          href="https://t.me/fencerror" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="assets/logos/Telegram.svg" alt="Telegram" />
        </a>
        <a 
          href="https://wa.me/79030693110" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="assets/logos/Whatsapp.svg" alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
}