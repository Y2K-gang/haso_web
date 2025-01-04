import axios from 'axios';
import { useState } from 'react';
import { ProductData } from '@/type/product';

const useCreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createProduct = async (productData: ProductData, token: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        '/product',
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('성공:', response.data);
      return response.data;
    } catch (err: any) {
      console.error('실패:', err);
      setError(err.response?.data?.message || '상품 생성 중 오류가 발생했습니다.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createProduct, loading, error };
};

export default useCreateProduct;