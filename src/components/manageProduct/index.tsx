import { CategoryEnum } from "@/type/category/CategoryEnum"; // enum import
import * as S from "./style";

interface ManageProductProps {
  text: CategoryEnum; // `CategoryEnum` 타입 적용
  date: string;
  onClick: () => void;
}

const ManageProduct = ({ text, date, onClick }: ManageProductProps) => {
  return (
    <S.ManageProductBack onClick={onClick}>
      <S.ManageProductContents>
        <span>{text}</span>
        <span>{date}</span>
      </S.ManageProductContents>
    </S.ManageProductBack>
  );
};

export default ManageProduct;
