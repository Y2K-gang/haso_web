import React, { useState, useEffect } from "react";
import { ProductData } from "@/type/product.type";

interface ProductEditFormProps {
  product: ProductData;
  onSave: (updatedProduct: ProductData) => void;
}

const ProductEditForm: React.FC<ProductEditFormProps> = ({
  product,
  onSave,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState<ProductData>(product);

  useEffect(() => {
    setUpdatedProduct(product); // 초기값 설정
  }, [product]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    onSave(updatedProduct); // 수정 완료 시 부모 컴포넌트로 데이터 전달
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>상품명:</label>
        <input
          type="text"
          name="title"
          value={updatedProduct.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>장소:</label>
        <input
          type="text"
          name="location"
          value={updatedProduct.location}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>단가:</label>
        <input
          type="number"
          name="unitPrice"
          value={updatedProduct.unitPrice}
          onChange={handleInputChange}
          required
          min="0"
        />
      </div>
      <div>
        <label>수량:</label>
        <input
          type="number"
          name="quantity"
          value={updatedProduct.quantity}
          onChange={handleInputChange}
          required
          min="0"
        />
      </div>
      <div>
        <label>상세설명:</label>
        <textarea
          name="description"
          value={updatedProduct.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="button" onClick={handleSaveClick}>
        수정 완료
      </button>
    </form>
  );
};

export default ProductEditForm;
