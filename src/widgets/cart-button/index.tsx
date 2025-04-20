import { Link } from "react-router-dom";
import { useCart } from "../../entities/cart/model";
import styles from "./styles.module.css";

export const CartButton = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className={styles.cartButton}>
      <img src="assets/logos/cart.svg" alt="Корзина" />
      {totalItems > 0 && <span className={styles.circle}>{totalItems}</span>}
    </Link>
  );
};