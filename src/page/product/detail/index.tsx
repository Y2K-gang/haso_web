import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetails from "@/components/form/product/productDetailForm";
import ChatButton from "@/components/XLargeButton";
import hasoAxios from "@/libs/axios";
import { ProductData } from "@/type/product.type";

const ProductDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>(); // URL 파라미터에서 productId 가져오기
  const [product, setProduct] = useState<ProductData | null>(null);
  const [isOwner, setIsOwner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!productId) return;

        // 상품 정보 가져오기(서버 연동)
        const fetchedProduct: ProductData = await hasoAxios.getData(
          `/product/${productId}`
        );

        setProduct(fetchedProduct);

        // 현재 로그인된 유저 ID 확인
        const currentUserId = localStorage.getItem("userId"); // 작성자 아이디 가져오기 (예시)
        setIsOwner(currentUserId === fetchedProduct.ownerId); // 작성자인지 확인
      } catch (err) {
        console.error("상품 정보를 가져오는 중 오류가 발생했습니다:", err);
        setError("상품 정보를 가져오지 못했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleEditClick = async () => {
    if (product) {
      console.log("상품 수정")
      navigate(`/product/${productId}/edit`, { state: { product } }); 
    }
  };

  const handleDeleteClick = async () => {
    if (productId) {
      try {
        await hasoAxios.deleteData(`/product/${productId}`, {});
        console.log(`상품 ${productId} 삭제`);
        navigate("/main"); // 삭제 후 메인으로 리다이렉트
      } catch (err) {
        console.error("상품 삭제 중 오류가 발생했습니다:", err);
        setError("상품을 삭제하지 못했습니다.");
      }
    }
  };

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!product) return <p>상품 정보를 찾을 수 없습니다.</p>;

  return (
    <S.DetailBack>
      <ProductDetails product={product} />
      {isOwner ? (
        <S.DivInDetailPage>
          <S.EditBtn
            onClick={handleEditClick}
          >
            수정하기
          </S.EditBtn>
          <S.DeleteBtn
            onClick={handleDeleteClick}
          >
            삭제하기
          </S.DeleteBtn>
        </S.DivInDetailPage>
      ) : (
        // 작성자가 아닐 경우 채팅하기 버튼 띄우기
        <ChatButton text={"채팅하기"} />
      )}
    </S.DetailBack>
  );
};

export default ProductDetailsPage;
