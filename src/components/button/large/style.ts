import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    padding: 10px 15px;
    background: ${({ theme }) => theme.colors.primary[400]};
    color: ${({ theme }) => theme.colors.white};
    font-family: "Pretendard-Bold";
    font-size: ${({ theme }) => theme.typography.fontSizes.heading[2]};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
    
    &:hover {
        background: ${({ theme }) => theme.colors.primary[500]};
        color: ${({ theme }) => theme.colors.primary[200]};
    }
`;
