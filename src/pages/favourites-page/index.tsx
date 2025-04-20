import styles from "./styles.module.css";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { useLanguage } from "../../features/language/LanguageContext";

function FavouritesPage() {
  const { language } = useLanguage();
  return (
    <div className={styles["favourites-page"]}>
      <Header />
      <main className={styles["favourites-main"]}>
      <h1>{language === "en" ? "Favourites" : "Избранное"}</h1>
        
      </main>
      <Footer />
    </div>
  );
}

export default FavouritesPage;