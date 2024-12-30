import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductEditForm from '@/components/productEditForm';
import { ProductData } from '@/type/product';

const ProductEditPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
//   const productId = new URLSearchParams(location.search).get('productId'); // URL 쿼리 파라미터에서 productId 추출
const productId = 34;
  const [product, setProduct] = useState<ProductData | null>(null);

  useEffect(() => {
    // productId가 없으면 수정할 수 없으므로 바로 리턴
    if (!productId) {
      alert('상품 ID가 없습니다.');
      navigate('/'); // 홈 페이지로 이동 (또는 다른 페이지로 이동)
      return;
    }

    // 더미 데이터로 대체 (실제 API 요청을 사용해야 함)
    const dummyFile = new File([''], 'dummy.jpg', { type: 'image/jpeg' });
    const dummyProduct: ProductData = {
      title: '신선한 고등어',
      images: [dummyFile],
      quantity: 10,
      unitPrice: 5000,
      description: '신선한 고등어를 판매합니다.',
      location: '서울특별시 강남구',
      category: '어류',
      ownerId: '1', // 게시글 작성자 ID
    };

    // 상품 데이터를 받아와서 상태 설정
    setProduct(dummyProduct);
  }, [productId]);

  const handleSave = (updatedProduct: ProductData) => {
    // 실제 API 요청을 통해 상품 수정 처리
    alert('수정이 완료되었습니다!');
    navigate(`/product/${productId}`); // 수정 후 상세 페이지로 이동
  };

  if (!product) return <p>로딩 중...</p>;

  return (
    <div>
      <h1>상품 수정</h1>
      <ProductEditForm product={product} onSave={handleSave} />
    </div>
  );
};

export default ProductEditPage;
