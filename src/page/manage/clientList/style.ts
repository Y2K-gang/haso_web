import styled from "styled-components";

export const ClientAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ClientListTopArea = styled.div`
  margin-top: 24px;
  padding-right: 30px;
  width: 1367px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.Title[3]};
  font-family: "Pretendard-Bold";
`;

export const WasteImg = styled.img`
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`;
