import React, {ReactNode} from "react";
import * as S from "./style";

interface FormProps {
    children?: ReactNode;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({children, onSubmit}: FormProps) => {
    return (
        <S.Form onSubmit={onSubmit}>
            {children}
        </S.Form>
    )
};

export default Form;
