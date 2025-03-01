import styled from "styled-components";

export const AddBtnBack = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[400]};
  width: 100px;
  height: 100px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 50px;
  bottom: 47px;
  &:hover {
    cursor: pointer;
  }
`;

export const AddBtnImg = styled.img`
  width: 58.8px;
`;
