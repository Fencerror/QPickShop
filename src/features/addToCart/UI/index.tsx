import { useCart } from '../../../entities/cart/model';
import styles from './styles.module.css';
import { useLanguage } from "../../../features/language/LanguageContext";

export const AddToCartLink = ({ productId }: {productId: number}) => {
  const { addToCart } = useCart();
  const { language } = useLanguage();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(productId);
  };

  return (
    <a 
      href="#" 
      onClick={handleClick} 
      className={styles.addToCartLink}
    >
      {language === "en" ? "Buy" : "Купить"}
    </a>
  );
};