import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetails from '@/components/productDetailForm';
import ChatButton from '@/components/chatButton';
import axios from 'axios';
import { ProductData } from '@/type/product';

const ProductDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams(); // URL 파라미터에서 productId를 가져옴
  const [product, setProduct] = useState<ProductData | null>(null);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (productId) {
      // 더미 데이터 (실제 API 호출로 대체)
      const dummyFile = new File([''], 'dummy.jpg', { type: 'image/jpeg' });
      const dummyProduct: ProductData = {
        title: '신선한 고등어',
        images: [dummyFile],
        quantity: 10,
        unitPrice: 5000,
        description: '신선한 고등어를 판매합니다.',
        location: '서울특별시 강남구',
        category: '어류',
        ownerId: '1', // 상품 작성자 ID
      };
      setProduct(dummyProduct);

      // 유저 정보 더미 데이터
      const currentUser = { userId: '1' }; // 현재 로그인된 유저 ID
      setIsOwner(currentUser.userId === dummyProduct.ownerId); // 작성자인지 여부 설정
    }
  }, [productId]);

  if (!product) return <p>로딩 중...</p>;

  return (
    <div>
      <ProductDetails product={product} />
      {isOwner ? (
        // 작성자일 경우 수정하기 버튼 표시
        <button
          onClick={() => navigate(`/product/${productId}/edit`)} // 수정 페이지로 이동 (쿼리 파라미터로 productId 전달)
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          수정하기
        </button>
      ) : (
        // 작성자가 아닐 경우 채팅하기 버튼 표시
        <ChatButton receiverId={product.ownerId} />
      )}
    </div>
  );
};

export default ProductDetailsPage;
