import hasoAxios from "@/libs/axios";
import { useState } from "react";
import { ProductData } from "@/type/product.type";

const useCreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createProduct = async (productData: ProductData, token: string) => {
    setLoading(true);
    try {
      // 반환 타입을 명시적으로 지정
      const response = await hasoAxios.postData<{ data: ProductData }>("/product", productData);
      console.log("성공:", response.data);
      return response.data;
    } catch (err: any) {
      console.error("실패:", err);
      setError(
        err.response?.data?.message || "상품 생성 중 오류가 발생했습니다."
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createProduct, loading, error };
};

export default useCreateProduct;
