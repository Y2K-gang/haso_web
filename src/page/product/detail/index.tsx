import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetails from '@/components/productDetailForm';
import ChatButton from '@/components/chatButton';
import axios from 'axios';
import { ProductData } from '@/type/product';
import { useProductEdit } from '@/hooks/product/useProductEdit';

const ProductDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>(); // URL 파라미터에서 productId 가져오기
  const [product, setProduct] = useState<ProductData | null>(null);
  const [isOwner, setIsOwner] = useState(false);

  const { editProduct, isLoading, error } = useProductEdit();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (!productId) return;

        const response = await axios.get(`/product/${productId}`);
        const fetchedProduct: ProductData = response.data;

        setProduct(fetchedProduct);

        // 현재 로그인된 유저 ID (나중에 로직 추가하기)
        const currentUserId = localStorage.getItem('userId');
        setIsOwner(currentUserId === fetchedProduct.ownerId); // 작성자인지 확인
      } catch (error) {
        console.error('상품 정보를 가져오는 중 오류가 발생했습니다:', error);
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
        await axios.delete(`/product/${productId}`);
        navigate('/main'); // 삭제 후 메인으로 리다이렉트
      } catch (error) {
        console.error('상품 삭제 중 오류가 발생했습니다:', error);
      }
    }
  };

  if (!product) return <p>로딩 중...</p>;

  return (
    <div>
      <ProductDetails product={product!} />
      {isOwner ? (
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handleEditClick}
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
          <button
            onClick={handleDeleteClick}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
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
