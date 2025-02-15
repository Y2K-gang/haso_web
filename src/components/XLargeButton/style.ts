import styled from "styled-components";

export const XLargeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1029px;
  height: 71.82px;
  background-color: ${({theme}) => theme.colors.primary[400]};
  border-radius: 10px;
  border: none;
  font-size: 24px;
  font-weight: bolder;
  color: #ffffff;
`;
