import { IProduct } from "../product/types";
import { useCart } from "./CartProvider";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}


export { useCart };