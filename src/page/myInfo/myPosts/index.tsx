import ProductCard from "@/components/product/card";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(-1);
  };

  const products = [
    { title: "고등어", money: 10000, weight: "kg", location: "서울" },
    { title: "광어", money: 20000, weight: "kg", location: "부산" },
    { title: "오징어", money: 15000, weight: "kg", location: "제주" },
    { title: "오징어", money: 15000, weight: "kg", location: "제주" },
  ];

  return (
    <S.MyPostsAll>
      <S.MyPostImgDiv onClick={onGoBack}>
        <S.StyledLeftArrowIcon />
      </S.MyPostImgDiv>
      <S.UserInfoProductWrapper>
        <S.ProductCardContainer>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              money={product.money}
              weight={product.weight}
              location={product.location}
            />
          ))}
        </S.ProductCardContainer>
      </S.UserInfoProductWrapper>
    </S.MyPostsAll>
  );
};

export default MyPosts;
