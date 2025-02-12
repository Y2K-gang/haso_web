import styled, { css } from "styled-components";

export const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
    width: 100px;
    height: 50px;
    padding: 15px;
    color: ${({ theme }) => theme.colors.white};
    font-family: "Pretendard-Bold";
    font-size: ${({ theme }) => theme.typography.fontSizes.body[2]};
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

            &:active {
                background: ${theme.colors.primary[600]};
            }

            &:disabled {
                background: ${theme.colors.primary[300]};
                cursor: not-allowed;
            }
        `}

        ${variant === 'secondary' && css`
            background: ${theme.colors.white};
            color: ${theme.colors.black};
            border: 1px solid ${theme.colors.black};

            &:hover {
                background: ${theme.colors.gray[300]};
            }

            &:active {
                background: ${theme.colors.gray[400]};
            }

            &:disabled {
                background: ${theme.colors.gray[200]};
                cursor: not-allowed;
            }
        `}
    `}

    @media (max-width: 1440px) { /* 맥 해상도 */
        width: 80px;
        height: 40px;
        padding: 12px;
    }

    @media (min-width: 1441px) { /* 데스크탑 해상도 */
        width: 100px;
        height: 50px;
        padding: 15px;
    }

    @media (max-width: 1024px) { /* 작은 화면용 (예: 태블릿) */
        width: 90px;
        height: 45px;
        padding: 13px;
    }
`;
