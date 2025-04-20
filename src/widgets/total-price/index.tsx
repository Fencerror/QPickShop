import { useLanguage } from '../../features/language/LanguageContext';
import styles from './styles.module.css'

interface TotalPriceProps {
  totalPrice: number;
}

export const TotalPrice = ({totalPrice}: TotalPriceProps) => {
  const {language} = useLanguage();
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
        <a className={styles.checkoutLink}>{language === "en" ? "Go to payment " : "Перейти к оформлению"}</a>
      </div>
    </div>
  )
}