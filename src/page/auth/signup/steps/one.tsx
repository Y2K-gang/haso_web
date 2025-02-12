import React from "react";
import LargeField from "@/components/filed/large";
import { StepProps } from "./index";
import { FormGap } from "@/page/auth/signup/steps/style";

const One = ({ signUp, onChange }: StepProps) => {
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(e);
  };
  return (
    <FormGap>
      <LargeField
        label="아이디"
        name="id"
        placeholder="아이디를 입력해주세요."
        value={signUp.id}
        onChange={onChange}
      />
      <LargeField
        label="비밀번호"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        type="password"
        value={signUp.password}
        onChange={onChange}
      />
      <LargeField
        label="비밀번호 확인"
        name="passwordConfirm"
        placeholder="비밀번호를 재확인해주세요"
        type="password"
        value={signUp.passwordConfirm}
        onChange={handlePasswordChange}
      />
    </FormGap>
  );
};

export default One;
