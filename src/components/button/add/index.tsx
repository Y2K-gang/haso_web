import * as S from "./style";
import plugImg from "@/assets/icons/plus/plus.svg";
import { ButtonProps } from "@/type/button/button.type";

const AddBtn = ({ onClick }: ButtonProps) => {
  return (
    <S.AddBtnBack onClick={onClick}>
      <S.AddBtnImg src={plugImg} />
    </S.AddBtnBack>
  );
};

export default AddBtn;