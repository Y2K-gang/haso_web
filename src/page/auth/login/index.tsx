import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as S from "./style";
import FormFiled from "@/components/form/filed";
import Form from "@/components/form"
import LargeButton from "@/components/button/large";

const Login = () => {
    const [id, setId] = useState<string>();
    const [password, setPassword] = useState<string>();

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/signup");
    }

    return (
        <S.Wrapper>
            <S.BackGround>
                <S.PrimaryCircle/>
                <S.SecondaryCircle/>
            </S.BackGround>
            <Form>
                <S.TitleBox>
                    <S.Title>하소에 온걸 환영해요!</S.Title>
                    <S.Description>하소를 원활하게 이용하기 위해 로그인 해주세요.</S.Description>
                </S.TitleBox>
                <S.FieldWrapper>
                    <FormFiled
                        label="아이디"
                        placeholder="아이디를 입력해주세요."
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <FormFiled
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요."
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </S.FieldWrapper>
                <S.LoginSection>
                    <LargeButton>로그인</LargeButton>
                    <S.Footer>
                        계정이 없으신가요? <S.SignUpLink onClick={handleSignUp}>회원가입</S.SignUpLink>
                    </S.Footer>
                </S.LoginSection>
            </Form>
        </S.Wrapper>
    );
};

export default Login;
