import styled from "styled-components";

export const AddBusiness = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1516px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  gap: 35px;
`;
export const AddBusinessTitle = styled.span`
  margin-top: 103px;
  font-size: ${({ theme }) => theme.typography.fontSizes.Title[1]};
  font-family: "Pretendard-Bold";
`;
