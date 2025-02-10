import styled from "styled-components";

export const ProviderAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  row-gap: 35.91px;
`;

export const ProviderTop = styled.div`
  margin-top: 47.88px;
  width: 1323px;
  height: 131.92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ProviderTopOfTop = styled.div`
  width: 1323px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.Title[1]};
  font-family: "Pretendard-Bold";
  margin-bottom: 39.9px;
`;

export const ProviderHeader = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[2]};
  font-family: "Pretendard-Bold";
`;

export const StatementVector = styled.img`
  width: 17.64px;
  position: absolute;
  left: 73.5px;

  &:hover {
    cursor: pointer;
  }
`;

export const ProviderMiddle = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 1102.5px;
  height: 319.2px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const TitleSpans = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[2]};
  font-family: "Pretendard-Bold";
`;
export const ContentsSpans = styled.span`
  font-size: 16px;
  font-family: "KimJungChulGothic"; /* 폰트 수정필요 */
`;
export const TradeDate = styled.span`
  padding: 4.41px;
  width: 147px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  font-family: "KimJungChulGothic"; /* 폰트 수정필요 */
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
`;
export const TradeDates = styled.div`
  display: flex;
  align-items: center;
  gap: 36.75px;
`;
export const ClientsInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1029px;
  height: 159.6px;
`;
export const ClientsInfosGroups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 470.4px;
`;
export const FontsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 73.5px;
`;
export const ReceiverBottom = styled.div`
  gap: 23.94px;
  width: 1073.1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 67.83px;
`;
export const ReceiverTables = styled.div``;

export const TradeTop = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 11.97px;
  table-layout: fixed;

  th {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
    padding: 15.96px;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.fontSizes.heading[2]};
    font-family: "Pretendard-Bold";
  }

  td {
    background-color: ${({ theme }) => theme.colors.white};
    border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
    text-align: center;
    padding: 15.96px;
    font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
    font-family: "Pretendard-Medium";
  }
  th:first-child,
  td:first-child {
    border-left: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  th:last-child,
  td:last-child {
    border-right: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const TableMiddle = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 11.97px;
  td {
    width: 147px;
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
    font-family: "Pretendard-Medium";
  }

  th {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
    padding: 15.96px 1.47px;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.fontSizes.heading[2]};
    font-family: "Pretendard-Bold";
  }

  th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  td:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
export const TableBottom = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  td {
    width: 352.8px;
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
    padding: 15.96px;
    font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
    font-family: "Pretendard-Medium";
  }

  th {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
    padding: 15.96px 29.4px;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.fontSizes.heading[2]};
    font-family: "Pretendard-Bold";
  }

  th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  td:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
