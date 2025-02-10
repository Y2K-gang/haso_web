import styled from "styled-components";

export const Form = styled.form`
  width: 514.5px;
  //height: 438.9px;
  padding: 1.563rem;
  border: 7.35px solid;
  z-index: 1;
  gap: 17.64px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.primary[200]};
  box-shadow: ${({ theme }) => theme.shadow.v2};
`;
