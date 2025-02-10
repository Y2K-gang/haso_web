import styled from "styled-components";

export const BusinessHistoryAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HistoryListTopArea = styled.div`
  margin-top: 23.94px;
  padding-right: 29.4px;
  width: 1323px;
  height: 79.8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BusinessFontArea = styled.div`
  width: 323.4px;
  font-size: ${({ theme }) => theme.typography.fontSizes.Title[3]};
  font-family: "Pretendard-Bold";
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BusinessVector = styled.img`
  width: 17.64px;

  &:hover {
    cursor: pointer;
  }
`;
