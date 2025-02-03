import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.colors.gray[200]};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;


// 배경
export const BackGround = styled.div`
    position: absolute;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.gray[200]};
`;

export const PrimaryCircle = styled.div`
    position: absolute;
    width: 35vw;
    height: 35vw;
    background: rgba(50, 125, 255, 0.7);
    filter: blur(15px);
    border-radius: 100%;
    left: 5%;
    top: 5%;
`;

export const SecondaryCircle = styled.div`
    position: absolute;
    width: 35vw;
    height: 35vw;
    background: rgba(79, 209, 197, 0.7);
    filter: blur(15px);
    border-radius: 100%;
    bottom: 5%;
    right: 5%;
`;


// 상단
export const TitleBox = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.fontSizes.title[2]};
    font-family: "Pretendard-Bold";
`;

export const Description = styled.p`
    font-family: "Pretendard-Medium";
    font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
    color: ${({ theme }) => theme.colors.text.Light};
    margin-bottom: 30px;
`;


// 중단
export const FieldWrapper = styled.div`
    display: flex;
    padding: 0.625rem;
    flex-direction: column;
    gap: 1.2rem;
`


// 하단
export const LoginSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.625rem;
    align-items: center;
    justify-content: center;
    margin-top: 1.2rem;
    gap: 1.2rem;
`;

export const Footer = styled.div`
    font-family: "Pretendard-Medium";
    font-size: ${({ theme }) => theme.typography.fontSizes.body[2]};
`;

export const SignUpLink = styled.a`
    font-family: "Pretendard-SemiBold";
    color: ${({theme}) => theme.colors.primary[400]};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;
