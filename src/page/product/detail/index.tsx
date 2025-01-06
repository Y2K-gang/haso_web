import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetails from "@/components/productDetailForm";
import ChatButton from "@/components/XLargeButton";
import hasoAxios from "@/libs/axios";
import { ProductData } from "@/type/product.type";
import { useProductEdit } from "@/hooks/product/useProductEdit";

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

        // 상품 정보 가져오기
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

  const handleEditClick = () => {
    if (product) {
      navigate(`/product/${productId}/edit`, { state: { product } }); // 수정 페이지로 이동하면서 상품 정보 전달
    }
  };

  const handleDeleteClick = async () => {
    if (productId) {
      try {
        await hasoAxios.deleteData(`/product/${productId}`, {});
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
    <div>
      <ProductDetails product={product} />
      {isOwner ? (
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleEditClick}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            수정하기
          </button>
          <button
            onClick={handleDeleteClick}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            삭제하기
          </button>
        </div>
      ) : (
        // 작성자가 아닐 경우 채팅하기 버튼 띄우기
        <ChatButton receiverId={product.ownerId} />
      )}
    </div>
  );
};

export default ProductDetailsPage;
