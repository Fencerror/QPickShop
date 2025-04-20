import styles from "./styles.module.css";
import { CartItemCard } from "../../widgets/cart-item-card";
import { useCart } from "../../entities/cart/model";
import { TotalPrice } from "../../widgets/total-price";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { useLanguage } from "../../features/language/LanguageContext";

export const CartPage = () => {
  const{
    cart,
    updateQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();
  const { language } = useLanguage();
  return (

    <div className={styles["cart-page"]}>
      <Header />

      <main className={styles.main}>
        <h1>{language === "en" ? "Cart" : "Корзина"}</h1>
        
        <div className={styles["cart-content"]}>
          {cart.length === 0 ? (
            <div className={styles['empty-state']}></div>
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
          <TotalPrice totalPrice={totalPrice} />
        </div>

      </main>
      
      <Footer />
    </div>
  )
}

