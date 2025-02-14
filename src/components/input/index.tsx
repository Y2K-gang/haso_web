import * as S from "./style";
import { InputProps } from "@/type/input/input.type";

const Input = ({ placeHolder }: InputProps) => {
  return (
    <S.InputAll placeholder={placeHolder}></S.InputAll>
  );
};

export default Input;