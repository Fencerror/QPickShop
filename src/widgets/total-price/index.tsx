import styles from './styles.module.css'

interface TotalPriceProps {
  totalPrice: number;
}

export const TotalPrice = ({totalPrice}: TotalPriceProps) => {
  return (
    <div className={styles.summary}>
      <div className={styles.summaryTitle}>
        <div className={styles.summaryTitleText}>
          ИТОГО:
        </div>
        <div className={styles.summaryTitlePrice}>
          {totalPrice} ₽
        </div>
      </div>

      <div className={styles.summaryLink}>
        <a className={styles.checkoutLink}>Перейти к оформлению</a>
      </div>
    </div>
  )
}