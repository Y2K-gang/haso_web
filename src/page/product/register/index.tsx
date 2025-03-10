import React, { useState } from "react";
import ProductForm from "@/components/form/product/register";
import { ProductData } from "@/type/product.type";
import * as S from "./style";
import hasoAxios from "@/libs/axios/customAxios"
import { Toast } from "@/libs/toast"

const RegisterProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (data: ProductData) => {
    const inputs = document.querySelectorAll("input, textarea");
    let isValid = true;
    try {
      // 초기화
      setLoading(true);
      setError(null);
  
      // 입력값 유효성 검사 및 오류 표시
      inputs.forEach((input) => {
        // input을 HTMLInputElement 또는 HTMLTextAreaElement로 타입 캐스팅
        const element = input as HTMLInputElement | HTMLTextAreaElement;
  
        if (!element.value) {
          isValid = false;
          element.classList.add("error"); // 값이 없으면 오류 스타일 추가
        } else {
          element.classList.remove("error");
        }
      });
  
      if (!isValid) {
        Toast("info", "모든 필드를 작성해주세요.");
        return;
      }
      const response = await hasoAxios.post("/product", data);
  
      console.log("제품 등록 성공:", response);
      Toast("success", "제품 등록 완료!");
    } catch (err: any) {
      console.error("제품 등록 실패:", err);
      setError(
        err.response?.data?.message || "제품 등록 중 오류가 발생했습니다."
      );
      Toast("error", "제품 등록 실패: " + (err.response?.data?.message || "오류 발생"));
    } finally {
      setLoading(false);
    }
  };  

  return (
    <S.RegisterBack>
      <ProductForm onSubmit={handleRegister} />
      {loading && <p>등록 중...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </S.RegisterBack>
  );
};

export default RegisterProductPage;
