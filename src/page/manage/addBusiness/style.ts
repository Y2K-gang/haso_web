import styled from "styled-components";

export const AddBusiness = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1516.2px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  gap: 35.91px;
`;
export const AddBusinessTitle = styled.span`
  margin-top: 103.74px;
  font-size: ${({ theme }) => theme.typography.fontSizes.Title[1]};
  font-family: "Pretendard-Bold";
`;
