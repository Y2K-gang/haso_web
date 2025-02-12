import { StepProps } from "./index";
import { FormGap } from "@/page/auth/signup/steps/style";
import LargeField from "@/components/filed/large";
import MediumField from "@/components/filed/medium";
import * as S from "./style";
import SmallButton from "@/components/button/small";

const Two = ({ signUp, onChange }: StepProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };


  return (
    <FormGap>
      <LargeField
        label="본명"
        name="name"
        placeholder="본명을 입력해주세요."
        value={signUp.name}
        onChange={handleChange}
      />
      <LargeField
        label="전화번호"
        name="tel"
        placeholder="전화번호를 입력해주세요."
        value={signUp.tel}
        onChange={handleChange}
      />
      <S.TelAccess>
        <S.InputWrapper>
          <MediumField
            label="인증번호"
            name="telAccess"
            placeholder="인증번호를 입력해주세요."
            value={signUp.telAccess}
            onChange={handleChange}
          />
        </S.InputWrapper>
        <SmallButton variant="primary" type="button">
          인증 요청
        </SmallButton>
      </S.TelAccess>
    </FormGap>
  );
};

export default Two;
