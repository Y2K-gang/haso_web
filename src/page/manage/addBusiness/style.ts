import styled from "styled-components";

export const AddBusiness = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 190vh;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  gap: 4.5vh;
`;
export const AddBusinessTitle = styled.span`
  margin-top: 13vh;
  font-size: ${({ theme }) => theme.typography.fontSizes.Title[1]};
  font-family: "Pretendard-Bold";
`;
