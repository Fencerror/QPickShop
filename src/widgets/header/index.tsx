import { CartButton } from '../cart-button';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["shop-name-text"]}>
        <Link to="/catalog"  className={styles["shop-name-text-link"]} ><h3><b>QPICK</b></h3></Link>
      </div>
      <div className={styles["header-buttons"]}>
          <img src="/assets/logos/heart.svg"  />
      <CartButton />
    </div>
  </header>
  )
}