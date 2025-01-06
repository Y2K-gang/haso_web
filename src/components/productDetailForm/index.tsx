import React from "react";
import { ProductData } from "@/type/product.type";

type ProductDetailsProps = {
  product: ProductData;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const renderImages = () => {
    if (!product.images || product.images.length === 0) {
      return <p>이미지가 없습니다.</p>;
    }

    return product.images.map((image, index) => {
      const imageUrl =
        image instanceof File ? URL.createObjectURL(image) : image;
      return (
        <img
          key={index}
          src={imageUrl}
          alt={`상품 사진 ${index + 1}`}
          style={{ width: "200px", height: "auto" }}
        />
      );
    });
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <div>{renderImages()}</div>
      <p>수량: {product.quantity}</p>
      <p>단가: {product.unitPrice}원</p>
      <p>장소: {product.location}</p>
      <p>설명: {product.description}</p>
      <p>어종: {product.category}</p>
    </div>
  );
};

export default ProductDetails;
