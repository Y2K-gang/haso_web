import React, { useState, useEffect, Fragment } from "react";
import * as S from "./style";
import Form from "@/components/form";
import { SIGNUP_STEPS } from "./steps";
import { useNavigate } from "react-router-dom";
import { SignUpProps } from "@/type/auth/index.type";
import LargeButton from "@/components/button/large";
import MediumButton from "@/components/button/medium";
import { Toast } from "@/libs/toast";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<SignUpProps>({
    name: "",
    id: "",
    password: "",
    passwordConfirm: "",
    tel: "",
    telAccess: "",
    store_name: "",
    store_no: "",
    fax_no: "",
    business_no: "", 
  });
  const navigate = useNavigate();

  const CurrentStepComponent = SIGNUP_STEPS[currentStep]?.component;

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (window.location.search) {
      window.history.replaceState({}, "", currentPath);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isValidField = (field: string): field is keyof SignUpProps =>
      field in formData;

    if (isValidField(name)) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const isCurrentStepValid = () => {
    const { validate } = SIGNUP_STEPS[currentStep];
    return validate ? validate(formData) : true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 필드 값이 맞지 않으면 Toast 띄우기
    if (!isCurrentStepValid()) {
      Toast("error", `올바른 정보를 입력해주세요. (단계 ${currentStep + 1})`);
      return;
    }

    // 비밀번호 일치 체크 (1단계에서만 체크)
    if (currentStep === 0 && formData.password !== formData.passwordConfirm) {
      Toast("error", "비밀번호가 일치하지 않습니다.");
      return;
    }

    // 전화번호와 인증번호 체크 (2단계에서만 체크)
    if (currentStep === 1 && (!formData.tel || !formData.telAccess)) {
      Toast("error", "전화번호 및 인증번호를 채워주세요.");
      return;
    }

    // 단계가 끝나면 완료 후 로그인 화면으로 이동
    if (currentStep < SIGNUP_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      Toast("success", "회원가입이 완료되었습니다!");
      navigate("/");
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <S.Wrapper>
      <S.BackGround>
        <S.SecondaryCircle />
        <S.PrimaryCircle />
      </S.BackGround>
      <Form onSubmit={handleSubmit}>
        <S.StepIndicator>
          {SIGNUP_STEPS.map((_, index) => (
            <Fragment key={index}>
              <S.StepCircle active={currentStep >= index}>
                {index + 1}
              </S.StepCircle>
              {index < SIGNUP_STEPS.length - 1 && (
                <S.StepLine active={currentStep > index} />
              )}
            </Fragment>
          ))}
        </S.StepIndicator>

        <S.TitleBox>
          <S.Title>계정 생성하기</S.Title>
          <S.Description>먼저 사용자 정보를 입력해주세요.</S.Description>
        </S.TitleBox>

        <S.FieldWrapper>
          {CurrentStepComponent ? (
            <CurrentStepComponent
              signUp={formData}
              onChange={handleInputChange}
            />
          ) : (
            <div>올바르지 않은 단계입니다.</div>
          )}
        </S.FieldWrapper>

        <S.LoginSection>
          <S.ButtonSection>
            {currentStep > 0 && (
              <MediumButton
                type="button"
                variant="secondary"
                onClick={handlePrev}
              >
                이전
              </MediumButton>
            )}
            {currentStep === 0 ? (
              <LargeButton type="submit" disabled={!isCurrentStepValid()}>
                {currentStep < SIGNUP_STEPS.length - 1 ? "다음" : "완료"}
              </LargeButton>
            ) : (
              <MediumButton
                variant="primary"
                type="submit"
                disabled={!isCurrentStepValid()}
              >
                {currentStep < SIGNUP_STEPS.length - 1 ? "다음" : "완료"}
              </MediumButton>
            )}
          </S.ButtonSection>
          <S.Footer>
            계정이 있으신가요?{" "}
            <S.SignUpLink onClick={handleLogin}>로그인하기</S.SignUpLink>
          </S.Footer>
        </S.LoginSection>
      </Form>
    </S.Wrapper>
  );
};

export default SignUp;
