import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductEditForm from '@/components/productEditForm';
import { ProductData } from '@/type/product';
import axios from 'axios';

const ProductEditPage: React.FC = () => {
  const navigate = useNavigate();
  const { id: productId } = useParams<{ id: string }>(); // URL의 {id}에서 productId 추출
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) {
      alert('상품 ID가 없습니다.');
      navigate('/main'); // 메인으로 이동
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await axios.get<ProductData>(`/product/${productId}`);
        setProduct(response.data);
      } catch (err: any) {
        setError('상품 정보를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, navigate]);

  const handleSave = async (updatedProduct: ProductData) => {
    try {
      await axios.patch(`/product/${productId}`, updatedProduct);
      alert('수정이 완료되었습니다!');
      navigate(`/product/${productId}`); // 수정 후 해당 상세 페이지로 이동
    } catch (err: any) {
      alert('수정을 실패했습니다.');
    }
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1>상품 수정</h1>
      {product && <ProductEditForm product={product} onSave={handleSave} />}
    </div>
  );
};

export default ProductEditPage;
