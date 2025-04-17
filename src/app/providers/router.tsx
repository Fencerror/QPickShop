import { BrowserRouter, Route, Routes } from "react-router-dom"
import CatalogPage from "../../pages/catalog-page"
import { CartPage } from "../../pages/cart-page"

export const RouterProvider = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </BrowserRouter>
  )
}