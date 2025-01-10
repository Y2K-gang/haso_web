import React, { useState } from "react";
import ProductForm from "@/components/form/product/productRegisterForm"; // 작성 폼 컴포넌트 임포트
import { ProductData } from "@/type/product.type";
import hasoAxios from "@/libs/axios";
import { Toast } from "@/libs/toast";
import { useNavigate, useParams } from "react-router-dom";

const ProductEditPage = () => {
  const [loading, setLoading] = useState(false);
  const { id: productId } = useParams<{ id: string }>(); // URL의 {id}에서 productId 추출
  const navigate = useNavigate();

  // 폼 제출 처리
  const handleProductSubmit = async (productData: ProductData) => {
    try {
      setLoading(true);
      // 서버에 데이터 보내기
      const response = await hasoAxios.postData("/product", productData);
      Toast("success", "상품이 등록되었습니다!");
      navigate(`/product/${productId}`); // 성공 시 상품 상세 페이지로 이동
    } catch (error) {
      console.error("상품 등록 실패", error);
      Toast("error", "상품 등록에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>상품 등록</h1>
      <ProductForm onSubmit={handleProductSubmit} />{" "}
      {/* ProductForm 컴포넌트 렌더링 */}
    </div>
  );
};

export default ProductEditPage;
