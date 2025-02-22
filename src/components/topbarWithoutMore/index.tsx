import * as S from "./style";

interface TabBarProps {
  title: string;
  onMoreClick?: () => void;
}

const TabBarWithoutMore = ({ title, onMoreClick }: TabBarProps) => {
  return (
    <S.Wrapper>
      <S.DescriptionText>{title}</S.DescriptionText>
      <S.More onClick={onMoreClick}>
      </S.More>
    </S.Wrapper>
  );
};

export default TabBarWithoutMore;