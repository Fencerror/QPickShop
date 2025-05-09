import { useLanguage } from "../../features/language/LanguageContext";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

interface TotalPriceProps {
  totalPrice: number;
}

export const TotalPrice = ({ totalPrice }: TotalPriceProps) => {
  const { language } = useLanguage();
  const isDisabled = totalPrice === 0;

  return (
    <div className={styles.summary}>
      <div className={styles.summaryTitle}>
        <div className={styles.summaryTitleText}>
          {language === "en" ? "TOTAL:" : "ИТОГО:"}
        </div>
        <div className={styles.summaryTitlePrice}>
          {totalPrice} ₽
        </div>
      </div>
      <div className={styles.summaryLink}>
        {isDisabled ? (
          <span className={`${styles.checkoutLink} ${styles.disabledLink}`}>
            {language === "en" ? "Go to payment" : "Перейти к оформлению"}
          </span>
        ) : (
          <Link to="/payment" className={styles.checkoutLink}>
            {language === "en" ? "Go to payment" : "Перейти к оформлению"}
          </Link>
        )}
      </div>
    </div>
  );
};