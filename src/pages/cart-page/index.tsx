import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { CartItemCard } from "../../widgets/cart-item-card";
import { useCart } from "../../entities/cart/model";



export const CartPage = () => {
  const{
    cart,
    updateQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();
  
  return (
    <div>
      <header className={styles["catalog-header"]}>
        <div className={styles["shop-name-text"]}>
          <Link to="/catalog"><h3><b>QPICK</b></h3></Link>
        </div>
        <div className={styles["header-buttons"]}>
          <a href="#">
            <img src="/assets/logos/heart.svg"  />
          </a>
          <Link to="/cart">
            <img src="/assets/logos/cart.svg"  />
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <h1>Корзина</h1>
        
        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <div className={styles.itemsList}>
            {cart.map(item => (
              <CartItemCard
                key={item.product.id}
                item={item}
                onIncrease={() => updateQuantity(item.product.id, item.quantity + 1)}
                onDecrease={() => updateQuantity(item.product.id, item.quantity - 1)}
                onRemove={() => removeFromCart(item.product.id)}
              />
            ))}
          </div>
        )}

        <div className={styles.summary}>
          <h3>Итого: {totalPrice} ₽</h3>
          <button className={styles.checkoutButton}>Оформить заказ</button>
        </div>
      </main>
      <footer className={styles["catalog-footer"]}>
         <div className={styles["shop-name-text"]}>
          <h3><b>QPICK</b></h3>
        </div>

        <div className={styles["footer-links"]}>
          <div className={styles["footer-links-column"]}>
            <a href="#">Избранное</a>
            <a href="#">Корзина</a>
            <a href="#">Контакты</a>
          </div>

          <div className={styles["footer-about"]}>
            <div className={styles["footer-lang-text"]}>
              <p className={styles["footer-about-first-text"]}> Условия сервиса</p>
            </div>
            <div className={styles["footer-lang-buttons"]}>
              <p className={styles["footer-about-second-text"]}><img src="/assets/logos/planet.svg" alt="planet-logo" /> <span>Рус</span> Eng </p>
            </div>
          </div>
        </div>
        <div className={styles["footer-socials"]}>
          <div className={styles["footer-socials2"]}>
            <img src="/assets/logos/VK.svg"/> <a href="#" ></a>
            <img src="/assets/logos/Telegram.svg"/> <a href="#" ></a>
            <img src="/assets/logos/Whatsapp.svg"/> <a href="#" ></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

