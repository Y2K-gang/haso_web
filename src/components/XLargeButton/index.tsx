import React from 'react';
import * as S from "./style";

interface XLargeButtonProps {
  text: string;
}

const XLargeButton: React.FC<XLargeButtonProps> = ({ text }) => {

  return (
    <S.XLargeButton>{text}</S.XLargeButton>
  );
};

export default XLargeButton;
