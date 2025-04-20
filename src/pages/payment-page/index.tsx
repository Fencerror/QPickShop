import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
export const PaymentPage = () => (
  <div className={styles.paymentPage}>
    <Header />
    <main className={styles.main}>
      <h1>Оплата</h1>
      <form className={styles.form}>
        <label>
          Номер карты:
          <input type="text" name="cardNumber" placeholder="0000 0000 0000 0000"/>
        </label>
        <label>
          Дата истечения:
          <input type="text" name="expiration" placeholder="ММ/ГГ" />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" placeholder="000"/>
        </label>
        <div className={styles.buttonGroup}>
          <a href="#" className={styles.submitButton}>Оплатить сейчас</a>
          <Link to="/cart" className={styles.cancelButton}>Отмена</Link>
        </div>
      </form>
    </main>
    <Footer />
  </div>
);
