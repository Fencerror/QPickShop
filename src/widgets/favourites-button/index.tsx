import { Link } from "react-router-dom";
import styles from "./styles.module.css";
export const FavouritesButton = () => (
  <Link to="/favourites" className={styles.heartButton}>
    <img src="assets/logos/heart.svg" alt="Избранное" />
    <span className={styles.circle}>2</span>
  </Link>
);