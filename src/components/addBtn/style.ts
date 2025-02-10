import styled from "styled-components";

export const AddBtnBack = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[400]};
  width: 95.55px;
  height: 95.55px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 51.45px;
  bottom: 47.88px;
  &:hover {
    cursor: pointer;
  }
`;

export const AddBtnImg = styled.img`
  width: 58.8px;
`;
