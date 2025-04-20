import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loader } from "../../shared/UI/Loader";
import { NotFoundPage } from "../../pages/not-found-page";

const CatalogPage = lazy(() => import("../../pages/catalog-page"));
const CartPage = lazy(() =>
  import("../../pages/cart-page").then(module => ({ default: module.CartPage }))
);

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}