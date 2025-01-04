import React, { useState } from "react";
import * as S from "./style";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface FiledProps {
    label?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const FormField = ({ label, name, type, placeholder, value, onChange, error }: FiledProps) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <S.Wrapper>
            <S.Label>{label}</S.Label>
            <S.InputWrapper>
                <S.Input
                    type={type === "password" && passwordVisible ? "text" : type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    autoCapitalize="off"
                />
                {type === "password" && (
                    <S.EyeIcon onClick={togglePasswordVisibility}>
                        {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </S.EyeIcon>
                )}
            </S.InputWrapper>
            {error && <S.Error>{error}</S.Error>}
        </S.Wrapper>
    );
};

export default FormField;
