import * as S from "./style";

interface XLargeButtonProps {
  text: string;
}

const XLargeButton = ({ text }: XLargeButtonProps) => {

  return (
    <S.XLargeButton>{text}</S.XLargeButton>
  );
};

export default XLargeButton;
