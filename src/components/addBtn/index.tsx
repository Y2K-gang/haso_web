import * as S from "./style";
import plusImg from "@/assets/image/plus.svg";
import { ButtonProps } from "@/type/button/button.type";
import { PropsWithChildren } from "react";

const AddBtn = ({ onClick }: ButtonProps) => {
  return (
    <S.AddBtnBack onClick={onClick}>
      <S.AddBtnImg src={plusImg} />
    </S.AddBtnBack>
  );
};

export default AddBtn;