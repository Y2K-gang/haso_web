import * as S from "./style";
import RightArrowIcons from "@/components/icons/arrow/right";

interface TabBarProps {
  title: string;
  onMoreClick?: () => void;
}

const TabBar = ({ title, onMoreClick }: TabBarProps) => {
  return (
    <S.Wrapper>
      <S.DescriptionText>{title}</S.DescriptionText>
      <S.More onClick={onMoreClick}>
        <S.MoreText>더보기</S.MoreText>
        <RightArrowIcons width={40} height={20} />
      </S.More>
    </S.Wrapper>
  );
};

export default TabBar;
