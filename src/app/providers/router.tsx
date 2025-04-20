import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loader } from "../../shared/UI/Loader";

const NotFoundPage = lazy(() =>
  import("../../pages/not-found-page").then(module => ({ default: module.NotFoundPage }))
);
const FavouritesPage = lazy(() => import("../../pages/favourites-page"));
const CatalogPage = lazy(() => import("../../pages/catalog-page"));
const CartPage = lazy(() =>
  import("../../pages/cart-page").then(module => ({ default: module.CartPage }))
);
const PaymentPage = lazy(() =>
  import("../../pages/payment-page").then(module => ({ default: module.PaymentPage }))
);

export const RouterProvider = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);