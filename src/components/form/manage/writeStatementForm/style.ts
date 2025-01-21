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
  font-family: Kim jung chul Gothic;
  border-bottom: 1px solid #d1d1d1;
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
  font-family: Kim jung chul Gothic;
`;

export const TitleSpans = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
export const AddBusinessMiddle = styled.div`
  background-color: white;
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
      background-color: #e8e8e8;
      border-right: 1px solid #d1d1d1;
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
      background-color: white;
      border-right: 1.5px solid #d1d1d1;
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
  border: 1px solid #a9a9a9;
  font-size: 16px;
  ::placeholder {
    color: #ababab;
  }
`;
export const SecondTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const Table2 = styled.table`
  width: 75vw;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 1.5vh;

  thead {
    background-color: #f4f4f4;

    th {
      background-color: #e8e8e8;
      border-right: 1px solid #d1d1d1;
      padding-left: 0.5vw;
      padding-right: 0.5vw;
      text-align: center;
      font-size: 17px;
      font-weight: 600;
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
      background-color: white;
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
      background-color: #e8e8e8;
      border-right: 1px solid #d1d1d1;
      padding-left: 0.5vw;
      padding-right: 0.5vw;
      text-align: center;
      font-size: 17px;
      font-weight: 600;
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
      background-color: white;
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