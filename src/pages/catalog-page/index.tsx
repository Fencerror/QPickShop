import { headphones } from "../../entities/product/mock/headphones";
import ProductCard from "../../widgets/catalog-item-card";
import styles from "./styles.module.css";
import { wirelessHeadphones } from "../../entities/product/mock/wirelessheadphones";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { Modal } from "../../shared/UI/Modal/modal";
import { useProductModal } from "../../features/productInfoModal/useProductModal";

function CatalogPage() {
  const { selectedProduct, isModalOpen, openModal, closeModal } = useProductModal();
  
  return (
    <div className={styles["catalog-page"]}>
      <Header />
      <main className={styles["catalog-main"]}>
        <section className={styles["headphones-section"]}>
          <h5>Наушники</h5>
          <div className={styles["product-grid"]}>
            {headphones.map((product) => (
              <ProductCard key={product.id} product={product} onOpenModal={openModal} />
            ))}
          </div>
        </section>
        <section className={styles["wirelessHeadphones-section"]}>
          <h5>Беспроводные наушники</h5>
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
            <p>Цена: {selectedProduct.price} ₽</p>
            <p>{selectedProduct.details}</p> {/* Детали товара */}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CatalogPage;