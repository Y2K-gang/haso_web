import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductEditForm from "@/components/form/product/productEditForm";
import { ProductData } from "@/type/product.type";
import * as S from "./style"
import hasoAxios from "@/libs/axios";
import { toast } from "react-toastify";

const ProductEditPage: React.FC = () => {
  const navigate = useNavigate();
  const { id: productId } = useParams<{ id: string }>(); // URL의 {id}에서 productId 추출
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) {
      toast.error("상품 ID가 없습니다.");
      navigate("/main"); // 메인으로 이동
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await hasoAxios.getData<ProductData>(
          `/product/${productId}`
        );
        setProduct(response); // 응답 데이터 저장
      } catch (err) {
        console.error("상품 정보를 불러오는 중 오류 발생:", err);
        setError("상품 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false); // 로딩 상태 해제
      }
    };

    fetchProduct();
  }, [productId, navigate]);

  const handleSave = async (updatedProduct: ProductData) => {
    try {
      await hasoAxios.patchData(`/product/${productId}`, updatedProduct);
      toast.success("수정이 완료되었습니다!");
      navigate(`/product/${productId}`); // 수정 후 상세 페이지로 이동
    } catch (err) {
      console.error("수정 요청 중 오류 발생:", err);
      toast.error("수정을 실패했습니다.");
    }
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <S.EditBack>
      <h1>상품 수정</h1>
      {product && <ProductEditForm product={product} onSave={handleSave} />}
    </S.EditBack>
  );
};

export default ProductEditPage;
