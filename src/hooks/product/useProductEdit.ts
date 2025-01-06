import { useState } from "react";
import hasoAxios from "@/libs/axios";
import { ProductData } from "@/type/product.type";

export const useProductEdit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editProduct = async (productId: string, updatedProduct: ProductData) => {
    try {
      setIsLoading(true);
      setError(null);

      await hasoAxios.patchData(`/product/${productId}`, updatedProduct);
    } catch (err) {
      setError("상품 수정에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return { editProduct, isLoading, error };
};
