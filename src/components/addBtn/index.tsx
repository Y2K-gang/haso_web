import * as S from "./style";
import plusImg from "@/assets/image/plus.svg";
import { ButtonProps } from "@/type/button/button.type";

const AddBtn = ({ onClick, disabled }: PropsWithChildren<ButtonProps>) => {
  return (
    <S.AddBtnBack onClick={onClick} disabled={disabled}>
      <S.AddBtnImg src={plusImg} />
    </S.AddBtnBack>
  );
};

export default AddBtn;