import React from "react";
import { useRegisterProduct } from "@/hooks/product/useRegisterProduct";
import ProductForm from "@/components/productWriteForm";
import { ProductData } from "@/type/product";
import * as S from "./style";

const RegisterProductPage: React.FC = () => {
  const { registerProduct, loading, error } = useRegisterProduct();

  const handleRegister = async (data: ProductData) => {
    try {
      await registerProduct(data);
      alert("제품 등록 완료!");
      // Navigate to another page if necessary
    } catch (err) {
      // alert("제품 등록 실패: " + (error || err.message));
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
