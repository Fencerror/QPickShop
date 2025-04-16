import { headphones } from "../../entities/product/mock/headphones";
import ProductCard from "../../widgets/product-card";
import './styles.css';
function CatalogPage() {
  return (
    <>
    <header className="catalog-header">
      <div className="shop-name-text">
        <h3><b>QPICK</b></h3>
      </div>
      <div className="header-buttons">
        <img> <a>Корзина</a> </img> 
        <img> <a>Избранное</a> </img> 
      </div>
    </header>

    <main className="catalog-main">
      <section className="headphones-section">
        <h5>Наушники</h5>
        {headphones.map((product) => (
          <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </main>

    <footer className="catalog-footer">
      <h3><b>QPICK</b></h3>

      <div className="footer-links">
        <div className="footer-links-column">
          <a href="#">Избранное</a>
          <a href="#">Корзина</a>
          <a href="#">Контакты</a>
        </div>
        <div className="footer-about">
          <p> Условия сервиса</p>
        </div>
        <div className="footer-lang-buttons">
          <img> <a>планет</a> </img> 
          <p><span>Рус</span> Eng</p>
        </div>
      </div>

      <div className="footer-socials">
        <img> <a href="#" ></a> </img>
        <img> <a href="#" ></a> </img>
        <img> <a href="#" ></a> </img>
      </div>
    </footer>
    </>
  )
}

export default CatalogPage;