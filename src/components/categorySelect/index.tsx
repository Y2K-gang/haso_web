import React from "react";
import * as S from "./style";
import PlusImg from "@/components/icons/plus";
import CheckImg from "@/components/icons/check";

interface CategoryProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategorySelector = ({ category, isSelected, onClick }: CategoryProps) => {
  return (
    <S.CateBack onClick={onClick} isSelected={isSelected}>
      {isSelected ? <CheckImg /> : <PlusImg />}
      {category}
    </S.CateBack>
  );
};

export default CategorySelector;
