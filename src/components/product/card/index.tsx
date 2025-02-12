import * as S from "./style";

interface ProductCardProps {
  title: string;
  money: number;
  weight: string;
  location: string;
}

const ProductCard = ({ title, money, weight, location }: ProductCardProps) => {
  return (
    <S.CardWrapper>
      <S.Image />
      <S.ContentWrapper>
        <S.LeftSection>
          <S.Title>{title}</S.Title>
          <S.WeightToMoney>
            <span>{money.toLocaleString()}</span>
            <span> / </span>
            <span>{weight}</span>
          </S.WeightToMoney>
        </S.LeftSection>
        <S.RightSection>
          <S.Location>{location}</S.Location>
        </S.RightSection>
      </S.ContentWrapper>
    </S.CardWrapper>
  );
};

export default ProductCard;
