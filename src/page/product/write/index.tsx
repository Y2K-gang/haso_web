import React from "react";
import useCreateProduct from "@/hooks/product/useCreateProduct";
import ProductForm from "@/components/productWriteForm";
import { ProductData } from "@/type/product";
import * as S from "./style";

const RegisterProductPage: React.FC = () => {
  const { createProduct, loading, error } = useCreateProduct();

  const handleRegister = async (data: ProductData) => {
    try {
      // 로컬 저장소에서 토큰 가져오기 (예시임)
      const token = localStorage.getItem("token");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      await createProduct(data, token);
      console.log(data)
      alert("제품 등록 완료!");
    } catch (err) {
      alert("제품 등록 실패: " + error);
    }
  };

  return (
    <S.Back>
      <ProductForm onSubmit={handleRegister} />
      {loading && <p>등록 중...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </S.Back>
  );
};

export default RegisterProductPage;
