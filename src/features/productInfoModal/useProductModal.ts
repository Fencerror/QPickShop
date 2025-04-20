import { useState } from "react";
import { IProduct } from "../../entities/product/types";

export const useProductModal = () => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: IProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { selectedProduct, isModalOpen, openModal, closeModal };
};