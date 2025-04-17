import { useCart } from '../../../entities/cart/model';
import styles from './styles.module.css';


export const AddToCartLink = ({ productId }: {productId: number}) => {
  const { addToCart } = useCart();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(productId);
  };

  return (
    <a href="#" onClick={handleClick} className={styles.addToCartLink}>
      Купить
    </a>
  );
};