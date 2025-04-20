import { IProduct } from "../../entities/product/types";
import { AddToCartLink } from "../../features/addToCart/UI";
import styles from "./styles.module.css";
import { useLanguage } from "../../features/language/LanguageContext";

interface ProductCartProps {
  product: IProduct;
  onOpenModal: (product: IProduct) => void;
}

function ProductCard({ product, onOpenModal }: ProductCartProps) {
  const { language } = useLanguage();
  return (
    <div className={styles.card}> 
      <img src={product.img} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>{product.price} ₽</p>
      <div className={styles.rating}>
        <img src="/assets/logos/star.svg" alt="Рейтинг" />
        <span className={styles.ratingText}>{product.rate}</span>
      </div>
      <div className={styles.buy}>
        <AddToCartLink productId={product.id} /> 
      </div>
      <a 
        onClick={() => onOpenModal(product)}
        className={styles.detailButton}
      >
        {language === "en" ? "Show more" : "Подробнее"}
      </a>
    </div>
  );
}

export default ProductCard;