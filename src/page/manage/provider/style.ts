import styled from "styled-components";

export const ProviderAll = styled.div`
  /* height: 110vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  row-gap: 4.5vh;
`;

export const ProviderTop = styled.div`
  margin-top: 6vh;
  width: 90vw;
  height: 14vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ProviderTopOfTop = styled.div`
  width: 90vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.Title[1]};
  font-family: "Pretendard-Bold";
  margin-bottom: 5vh;
`;

export const ProviderHeader = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[1]};
  font-family: "Pretendard-Bold";
`;

export const StatementVector = styled.img`
  width: 1.2vw;
  position: absolute;
  left: 5vw;

  &:hover {
    cursor: pointer;
  }
`;

export const ProviderMiddle = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 75vw;
  height: 40vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const TitleSpans = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[1]};
  font-family: "Pretendard-Bold"; /* 폰트 수정 필요 */
`;
export const ContentsSpans = styled.span`
  font-size: 16px;
  font-family: Kim jung chul Gothic;
`;
export const TradeDate = styled.span`
  padding: 0.3vw;
  width: 10vw;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  font-family: "KimJungChulGothic"; /* 폰트 수정 필요 */
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
`;
export const ClientsInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
  height: 20vh;
`;
export const ClientsInfosGroups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32vw;
`;
export const FontsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5vw;
`;
export const ProviderBottom = styled.div`
  gap: 3vh;
  width: 73vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 9vh;
`;
export const ProviderTables = styled.div``;

export const TradeTop = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1.5vh;
  table-layout: fixed;

  th {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
    padding: 2vh;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.fontSizes.heading[2]};
    font-family: "Pretendard-Bold";
  }

  td {
    background-color: ${({ theme }) => theme.colors.white};
    border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
    text-align: center;
    padding: 2vh;
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
  margin-bottom: 1.5vh;
  td {
    width: 10vw;
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
    font-family: "Pretendard-Medium";
  }

  th {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
    padding: 2vh 0.1vw;
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
    width: 24vw;
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
    padding: 2vh;
    font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
    font-family: "Pretendard-Medium";
  }

  th {
    background-color: ${({ theme }) => theme.colors.gray[400]};
    border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
    padding: 2vh 2vw;
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
