import styled from "styled-components";

export const ManageProductBack = styled.div`
  width: 1180px;
  height: 100px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[500]};
    cursor: pointer;
  }
`;

export const ManageProductContents = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[1]};
  font-family: "Pretendard-Bold";
`;