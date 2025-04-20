import { headphones } from "../../entities/product/mock/headphones";
import ProductCard from "../../widgets/catalog-item-card";
import styles from "./styles.module.css";
import { wirelessHeadphones } from "../../entities/product/mock/wirelessheadphones";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { Modal } from "../../shared/UI/Modal/modal";
import { useProductModal } from "../../features/productInfoModal/useProductModal";
import { useLanguage } from "../../features/language/LanguageContext";

function CatalogPage() {
  const { selectedProduct, isModalOpen, openModal, closeModal } = useProductModal();
  const { language } = useLanguage();
  
  return (
    <div className={styles["catalog-page"]}>
      <Header />
      <main className={styles["catalog-main"]}>
        <section className={styles["headphones-section"]}>
          <h5>{language === "en" ? "Headphones" : "Наушники"}</h5>
          <div className={styles["product-grid"]}>
            {headphones.map((product) => (
              <ProductCard key={product.id} product={product} onOpenModal={openModal} />
            ))}
          </div>
        </section>
        <section className={styles["wirelessHeadphones-section"]}>
          <h5>{language === "en" ? "Wireless Headphones" : "Беспроводные наушники"}</h5>
          <div className={styles["product-grid"]}>
            {wirelessHeadphones.map((product) => (
              <ProductCard key={product.id} product={product} onOpenModal={openModal} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProduct && (
          <div>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.img} alt={selectedProduct.title} className={styles["modal-image"]} />
            <p>{language === "en" ? "Price:" : "Цена:"} {selectedProduct.price} ₽</p>
            <p>{selectedProduct.details[language]}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CatalogPage;