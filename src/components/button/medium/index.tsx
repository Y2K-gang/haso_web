import * as S from './style';
import { ButtonStyle } from "@/type/button/button.type";
import { PropsWithChildren } from 'react';

const MediumButton = ({ children, onClick, disabled, variant, type }: PropsWithChildren<ButtonStyle>) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} variant={variant} type={type}>
      {children}
    </S.Button>
  )
}

export default MediumButton;
