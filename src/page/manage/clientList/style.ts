import styled from "styled-components";

export const ClientAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ClientListTopArea = styled.div`
  margin-top: 23.94px;
  padding-right: 29.4px;
  width: 1367.1px;
  height: 79.8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.Title[3]};
  font-family: "Pretendard-Bold";
`;

export const WasteImg = styled.img`
  width: 29.4px;
  &:hover {
    cursor: pointer;
  }
`;
