import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useLanguage } from "../../features/language/LanguageContext";
export const PaymentPage = () => {
  const { language } = useLanguage();
  return (
  <div className={styles.paymentPage}>
    <Header />
    <main className={styles.main}>
      <h1>{language === "en" ? "Payment" : "Оплата"}</h1>
      <form className={styles.form}>
        <label>
        {language === "en" ? "Card number" : "Номер карты"}
          <input type="text" name="cardNumber" placeholder="0000 0000 0000 0000"/>
        </label>
        <label>
        {language === "en" ? "Expiration" : "Срок действия"}
          <input type="text" name="expiration" placeholder="ММ/ГГ" />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" placeholder="000"/>
        </label>
        <div className={styles.buttonGroup}>
          <a href="#" className={styles.submitButton}>{language === "en" ? "Pay now" : "Оплатить сейчас"}</a>
          <Link to="/cart" className={styles.cancelButton}>{language === "en" ? "Cancel" : "Отмена"}</Link>
        </div>
      </form>
    </main>
    <Footer />
  </div>
);
}