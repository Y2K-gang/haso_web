import styled from "styled-components";

export const Form = styled.form`
    width: 35vw;
    //height: 55vh;
    padding: 1.563rem;
    border: 0.5vw solid;
    z-index: 1;
    gap: 1.2vw;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary[200]};
    box-shadow: ${({ theme }) => theme.shadow.v2};
`