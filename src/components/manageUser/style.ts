import styled from "styled-components";

export const ManageUserBack = styled.div`
  width: 1323px;
  height: 103.74px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 31.92px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[500]};
    cursor: pointer;
  }
`;
export const ManageUserContents = styled.div`
  width: 1220.1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ManageUserContentsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[1]};
  font-family: "Pretendard-Bold";
`;

export const ManageUserArea = styled(ManageUserContentsArea)`
  width: 161.7px;
`;
