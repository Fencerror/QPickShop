import { RouterProvider } from './app/providers/router';
import { CartProvider } from "./entities/cart/CartProvider";
import './app/styles/globals.css';

function App() {
  return (
    <CartProvider>
      <RouterProvider />
    </CartProvider>
  );
}

export default App;
