import styled from "styled-components";

export const AddBusinessContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;
`;
export const TradeDate = styled.span`
  padding: 0.3vw;
  width: 10vw;
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
  gap: 2.5vw;
`;
export const ClientsInfos = styled.div`
  display: flex;
  justify-content: space-around;
  width: 65vw;
  height: 20vh;
`;
export const ClientsInfosGroups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FontsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5vw;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const ContentsSpans = styled.span`
  font-size: 16px;
  font-family: "KimJungChulGothic"; /* 폰트 수정필요 */
`;

export const TitleSpans = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[1]};
  font-family: "Pretendard-Bold";
`;
export const AddBusinessMiddle = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 75vw;
  height: 40vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Table1 = styled.table`
  width: 75vw;
  border-collapse: separate;
  border-spacing: 0 1.5vh;
  table-layout: fixed;

  thead {
    background-color: #f4f4f4;

    th {
      background-color: ${({ theme }) => theme.colors.gray[400]};
      border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
      padding: 1vw;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    th:last-child {
      border-right: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    th:first-child {
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
  }

  tbody {
    td {
      background-color: ${({ theme }) => theme.colors.white};
      border-right: 1.5px solid ${({ theme }) => theme.colors.gray[500]};
      text-align: center;
      font-size: 16px;
      font-weight: 500;

      input {
        width: 100%;
        height: 5.5vh;
        border: none;
        font-size: 16px;
        text-align: center;
      }
    }
    td:last-child {
      border-right: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    td:first-child {
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
`;

export const AddressInput = styled.input`
  width: 23vw;
  height: 5.5vh;
  padding: 1vw;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
  font-family: "Pretendard-Medium";
  ::placeholder {
    color: #ababab;
  }
`;
export const SecondTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[1]};
  font-family: "Pretendard-Bold";
`;

export const Table2 = styled.table`
  width: 75vw;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 1.5vh;

  thead {
    background-color: #f4f4f4;

    th {
      background-color: ${({ theme }) => theme.colors.gray[400]};
      border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
      padding-left: 0.5vw;
      padding-right: 0.5vw;
      text-align: center;
      font-size: ${({ theme }) => theme.typography.fontSizes.heading[4]};
      font-family: "Pretendard-Semibold";
    }
    th:last-child {
      border-right: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    th:first-child {
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
    td {
      background-color: ${({ theme }) => theme.colors.white};
      text-align: center;
      font-size: 16px;
      font-weight: 500;

      input {
        width: 100%;
        height: 5.5vh;
        border: none;
        font-size: 16px;
        text-align: center;
      }
    }
    td:last-child {
      border-right: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    td:first-child {
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
`;
export const Table3 = styled.table`
  width: 75vw;
  border-collapse: separate;
  border-spacing: 0;

  thead {
    background-color: #f4f4f4;

    th {
      width: 10vw;
      background-color: ${({ theme }) => theme.colors.gray[400]};
      border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
      padding-left: 0.5vw;
      padding-right: 0.5vw;
      text-align: center;
      font-size: ${({ theme }) => theme.typography.fontSizes.heading[4]};
      font-family: "Pretendard-Semibold";
    }
    th:last-child {
      border-right: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    th:first-child {
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
    td {
      background-color: ${({ theme }) => theme.colors.white};
      text-align: center;
      font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
      font-family: "Pretendard-Medium";

      input {
        width: 100%;
        height: 5.5vh;
        border: none;
        font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
        font-family: "Pretendard-Medium";
        text-align: center;
      }
    }
    td:last-child {
      border-right: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    td:first-child {
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
`;
