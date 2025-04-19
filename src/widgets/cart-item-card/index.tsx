import styles from "./styles.module.css";
import { ICartItem } from "../../entities/cart/types";

interface CartItemCardProps {
  item: ICartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export const CartItemCard = ({
  item, onIncrease, onDecrease, onRemove,
}: CartItemCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.remove} onClick={onRemove}>
        <img src='/assets/logos/remove.svg' alt='remove-logo'/>
      </div>

      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <img
            src={item.product.img}
            alt={item.product.title}
            className={styles.image}
          />
        </div>
        <div className={styles.controls}>
          <button 
            className={styles.button} 
            onClick={onDecrease}
            disabled={item.quantity <= 1}
          ></button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button 
            className={styles.button} 
            onClick={onIncrease}
          ></button>
        </div>
      </div>

      <div className={styles.info}>
        <h6 className={styles.title}>{item.product.title}</h6>
        <p className={styles.price}>{item.product.price} ₽</p>
      </div>
      <div className={styles.total}>
        {item.product.price * item.quantity} ₽
      </div>
    </div>
  );
};