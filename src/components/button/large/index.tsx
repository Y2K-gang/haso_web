import * as S from './style';
import { ButtonProps } from "@/type/button/button.type";
import { PropsWithChildren } from 'react';

const LargeButton = ({ children, onClick, disabled }: PropsWithChildren<ButtonProps>) => {
    return (
        <S.Button onClick={onClick} disabled={disabled}>
            {children}
        </S.Button>
    )
}

export default LargeButton;