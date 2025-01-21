import * as S from "./style";
import plusImg from "@/assets/image/plus.svg";

const AddBtn = ({ onClick }) => {
  return (
    <S.AddBtnBack onClick={onClick}>
      <S.AddBtnImg src={plusImg} />
    </S.AddBtnBack>
  );
};

export default AddBtn;
