import { Link } from "react-router-dom";
import { headphones } from "../../entities/product/mock/headphones";
import ProductCard from "../../widgets/catalog-item-card";
import styles from "./styles.module.css";
import { wirelessHeadphones } from "../../entities/product/mock/wirelessheadphones";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";

function CatalogPage() {
  return (
    <div className={styles["catalog-page"]}>
     <Header />
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

      <Footer />
    </div>
  );
}

export default CatalogPage;