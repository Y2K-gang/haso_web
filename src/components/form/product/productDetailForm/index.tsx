import React from "react";
import { ProductData } from "@/type/product.type";
import * as S from "./style";

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
    <S.AllAreaOfDetail>
      <S.ImgArea>
      {renderImages()}
      </S.ImgArea>
      <S.InfoArea>
        <S.Title>{product.title}</S.Title>
        <S.InfoAreaInArea>
          <S.SemiBoldFonts>{product.quantity}마리</S.SemiBoldFonts>
          <S.SemiBoldFonts>{product.unitPrice}원</S.SemiBoldFonts>
          <S.SemiBoldFonts>{product.location}</S.SemiBoldFonts>
        </S.InfoAreaInArea>
        <S.Groups>
          <S.SemiBoldFonts>설명</S.SemiBoldFonts>
          <S.ExplainContents>{product.description}</S.ExplainContents>
        </S.Groups>
        <S.Groups>
          <S.SemiBoldFonts>구분</S.SemiBoldFonts>
          <S.CategoryArea>{product.category}</S.CategoryArea>
        </S.Groups>
      </S.InfoArea>
    </S.AllAreaOfDetail>
  );
};

export default ProductDetails;
