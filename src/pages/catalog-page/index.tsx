import { Link } from "react-router-dom";
import { headphones } from "../../entities/product/mock/headphones";
import ProductCard from "../../widgets/catalog-item-card";
import styles from "./styles.module.css";
import { CartButton } from "../../widgets/cart-button";
import { wirelessHeadphones } from "../../entities/product/mock/wirelessheadphones";

function CatalogPage() {
  return (
    <div className={styles["catalog-page"]}>
      <header className={styles["catalog-header"]}>
        <div className={styles["shop-name-text"]}>
          <h3><b>QPICK</b></h3>
        </div>
        <div className={styles["header-buttons"]}>
        <a href="#">
            <img src="/assets/logos/heart.svg"  />
          </a>
        <CartButton />
        </div>
      </header>

      <main className={styles["catalog-main"]}>
        <section className={styles["headphones-section"]}>
          <h5>Наушники</h5>
          <div className={styles["product-grid"]}>
            {headphones.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section className={styles["wirelessHeadphones-section"]}>
          <h5>Беспроводные наушники</h5>
          <div className={styles["product-grid"]}>
            {wirelessHeadphones.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

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
    </div>
  );
}

export default CatalogPage;