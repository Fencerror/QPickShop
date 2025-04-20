import { RouterProvider } from './app/providers/router';
import { CartProvider } from "./entities/cart/CartProvider";
import { LanguageProvider } from "./features/language/LanguageContext";
import './app/styles/globals.css';

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <RouterProvider />
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
