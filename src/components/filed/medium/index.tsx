import React from "react";
import * as S from "./style";
import { FiledProps } from "@/type/field/field.type";

const MediumField = ({
  label,
  name,
  placeholder,
  value,
  onChange,
}: FiledProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`${name} changed to ${e.target.value}`);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <S.Wrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default MediumField;
