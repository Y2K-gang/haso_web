import styled, { css } from "styled-components";

export const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
    width: 200px;
    padding: 10px 15px;
    color: ${({ theme }) => theme.colors.white};
    font-family: "Pretendard-Bold";
    font-size: ${({ theme }) => theme.typography.fontSizes.heading[2]};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;

    ${({ variant, theme }) => css`
        ${variant === 'primary' && css`
            background: ${theme.colors.primary[400]};

            &:hover {
                background: ${theme.colors.primary[500]};
                color: ${theme.colors.primary[200]};
            }
        `}

        ${variant === 'secondary' && css`
            background: ${theme.colors.white};
            color: ${theme.colors.black};
            border: 1px solid ${theme.colors.black};

            &:hover {
                background: ${theme.colors.gray[300]};
            }
        `}
    `}

    @media (max-width: 1440px) { // 맥 해상도
        width: 30vw;
    }

    @media (min-width: 1441px) { // 윈도우 조정
        width: 200px;
    }
`;
