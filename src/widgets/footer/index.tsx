import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles["catalog-footer"]}>
    <div className={styles["shop-name-text"]}>
     <h3><b>QPICK</b></h3>
   </div>

   <div className={styles["footer-links"]}>
     <div className={styles["footer-links-column"]}>
       <a href="#">Избранное</a>
       <a href="#">Корзина</a>
       <a href="#">Контакты</a>
     </div>

     <div className={styles["footer-about"]}>
       <div className={styles["footer-lang-text"]}>
         <p className={styles["footer-about-first-text"]}> Условия сервиса</p>
       </div>
       <div className={styles["footer-lang-buttons"]}>
         <p className={styles["footer-about-second-text"]}><img src="/assets/logos/planet.svg" alt="planet-logo" /> <span>Рус</span> Eng </p>
       </div>
     </div>
   </div>
   <div className={styles["footer-socials"]}>
     <div className={styles["footer-socials2"]}>
       <img src="/assets/logos/VK.svg"/> <a href="#" ></a>
       <img src="/assets/logos/Telegram.svg"/> <a href="#" ></a>
       <img src="/assets/logos/Whatsapp.svg"/> <a href="#" ></a>
     </div>
   </div>
 </footer>
  )
}