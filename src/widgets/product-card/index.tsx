import { IProduct } from "../../entities/product/types";
import AddToCartLink from "../../features/addToCart/UI/addToCart-Link";
interface ProductCartProps {
  product: IProduct;
}

function ProductCard({ product}: ProductCartProps) {
  return (
    <div className="styles.card"> 
    <img src={product.img} alt={product.title} className="styles.image" />
    <p>{product.title}</p>
    <p>{product.price}</p>
    <p>{product.rate}</p>
    <AddToCartLink />
    </div>
  )
}

export default ProductCard;