import { useNavigate } from "react-router-dom";

import * as S from "./style";

import Header from "@/components/common/header";
import Slide from "@/components/slide";
import TabBar from "@/components/tapbar";
import ProductCard from "@/components/product/card";

const Main = () => {
  // const navigate = useNavigate();

  // const onMoreClick = () => {
  //   navigate("/location/product");
  // };

  const products = [
    { title: "고등어", money: 10000, weight: "kg", location: "서울" },
    { title: "광어", money: 20000, weight: "kg", location: "부산" },
    { title: "오징어", money: 15000, weight: "kg", location: "제주" },
  ];

  return (
    <S.Wrapper>
      <Header />
      <Slide />
      <S.ProductWrapper>
        <TabBar title="지역의 상품" /* onMoreClick={onMoreClick} */ />
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
      </S.ProductWrapper>
      <S.ProductWrapper>
        <TabBar title="최근 등록된 상품" /* onMoreClick={onMoreClick} */ />
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
      </S.ProductWrapper>
    </S.Wrapper>
  );
};

export default Main;
