import React from "react";
import * as S from "./style";
import plusImg from "@/assets/image/plus.svg";
import checkImg from "@/assets/image/check.svg";

interface CategoryProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}


const CategorySelector: React.FC<CategoryProps> = ({
  category,
  isSelected,
  onClick,
}) => {
  return (
    <S.CateBack onClick={onClick} isSelected={isSelected}>
      <img src={isSelected ? checkImg : plusImg} />
      {category}
    </S.CateBack>
  );
};

export default CategorySelector;
