import styled from "styled-components";

export const StatementAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StatementTopArea = styled.div`
  margin-top: 24px;
  padding-right: 30px;
  width: 1323px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatementFontArea = styled.div`
  width: 323px;
  font-size: ${({ theme }) => theme.typography.fontSizes.Title[3]};
  font-family: "Pretendard-Bold";
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatementVector = styled.img`
  width: 18px;

  &:hover {
    cursor: pointer;
  }
`;
