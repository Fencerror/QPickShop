import { IProduct } from "../../entities/product/types";
import { AddToCartLink } from "../../features/addToCart/UI";
import styles from "./styles.module.css";

interface ProductCartProps {
  product: IProduct;
}

function ProductCard({ product}: ProductCartProps) {
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
    </div>
  );
}
export default ProductCard;