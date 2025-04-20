import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={styles["catalog-footer"]}>
    <div className={styles["shop-name-text"]}>
     <h3><b>QPICK</b></h3>
   </div>

   <div className={styles["footer-links"]}>
     <div className={styles["footer-links-column"]}>
       <a href="#">Избранное</a>
       <Link to="/cart">Корзина</Link>
       <a href="#">Контакты</a>
     </div>

      <p className={styles["footer-lang-text"]}>
        Условия сервиса
      </p>
      <div className={styles["footer-lang-buttons"]}>
        <p className={styles["footer-about-second-text"]}><img src="/assets/logos/planet.svg" alt="planet-logo" /> 
        <a href='#'><span>Рус</span></a> 
        <a href='#'>Eng</a>
         </p>
     </div>
   </div>


     <div className={styles["footer-socials"]}>
      <a 
      href="https://vk.com/stepan_orlow" 
      target="_blank" 
      rel="noopener noreferrer"
      >
        <img src="/assets/logos/VK.svg" alt="VK" />
      </a>
      <a 
      href="https://t.me/fencerror" 
      target="_blank" 
      rel="noopener noreferrer"
      >
        <img src="/assets/logos/Telegram.svg" alt="Telegram" />
      </a>
      <a 
      href="https://wa.me/79030693110" 
      target="_blank" 
      rel="noopener noreferrer"
      >
        <img src="/assets/logos/Whatsapp.svg" alt="WhatsApp" />
      </a>
    </div>
 </footer>
  )
}