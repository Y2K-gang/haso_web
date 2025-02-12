import { useState } from "react";
import * as S from "./style";
import { TableProps } from "@/type/manage/table/index.type";

const WriteConsumerStatement = () => {
  const [tableData, setTableData] = useState<TableProps[]>(
    Array.from({ length: 10 }, () => ({
      item: "",
      spec: "",
      quantity: "",
      unitPrice: "",
      supplyAmount: "",
      taxAmount: "",
    }))
  );

  const handleInputChange = (
    index: number,
    field: keyof TableProps,
    value: string
  ) => {
    setTableData((prevData) =>
      prevData.map((row, i) =>
        i === index ? { ...row, [field]: value } : row
      )
    );
  };

  return (
    <S.AddBusinessContents>
      <S.AddBusinessMiddle>
        <S.TradeDates>
          <S.TitleSpans>거래일자</S.TitleSpans>
          <S.TradeDate>2024 / 20 / 31</S.TradeDate>
        </S.TradeDates>
        <S.ClientsInfos>
          <S.ClientsInfosGroups>
            <S.FontsArea>
              <S.TitleSpans>전화번호</S.TitleSpans>
              <S.ContentsSpans>10112341234</S.ContentsSpans>
            </S.FontsArea>
            <S.FontsArea>
              <S.TitleSpans>등록번호</S.TitleSpans>
              <S.ContentsSpans>0123456789</S.ContentsSpans>
            </S.FontsArea>
            <S.FontsArea>
              <S.TitleSpans>사업장주소</S.TitleSpans>
              <S.AddressInput placeholder="사업장 주소를 입력해주세요." />
            </S.FontsArea>
          </S.ClientsInfosGroups>
          <S.ClientsInfosGroups>
            <S.FontsArea>
              <S.TitleSpans>팩스</S.TitleSpans>
              <S.ContentsSpans>78787878</S.ContentsSpans>
            </S.FontsArea>
            <S.FontsArea>
              <S.TitleSpans>상호</S.TitleSpans>
              <S.ContentsSpans>하소</S.ContentsSpans>
            </S.FontsArea>
            <S.FontsArea>
              <S.TitleSpans>성명</S.TitleSpans>
              <S.ContentsSpans>성명</S.ContentsSpans>
            </S.FontsArea>
          </S.ClientsInfosGroups>
        </S.ClientsInfos>
      </S.AddBusinessMiddle>
      <S.SecondTitle>거래 정보</S.SecondTitle>
      <div>
        <S.Table1>
          <thead>
            <tr>
              <th>품목 및 품종</th>
              <th>규격</th>
              <th>수량</th>
              <th>단가</th>
              <th>공급가액</th>
              <th>부가세액</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                {Object.keys(row).map((field) => (
                  <td key={field}>
                    <input
                      type="text"
                      value={row[field as keyof TableProps]}
                      onChange={(e) =>
                        handleInputChange(index, field as keyof TableProps, e.target.value)
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </S.Table1>
        <S.Table2>
          <thead>
            <tr>
              <th>수량</th>
              <td>
                <input type="text" />
              </td>
              <th>공급가액</th>
              <td>
                <input type="text" />
              </td>
              <th>VAT</th>
              <td>
                <input type="text" />
              </td>
              <th>합계</th>
              <td>
                <input type="text" />
              </td>
              <th>인수</th>
              <td>
                <input type="text" />
              </td>
            </tr>
          </thead>
        </S.Table2>
        <S.Table3>
          <thead>
            <tr>
              <th>미수금</th>
              <td>
                <input type="text" />
              </td>
              <th>입금계좌</th>
              <td>
                <input type="text" />
              </td>
            </tr>
          </thead>
        </S.Table3>
      </div>
    </S.AddBusinessContents>
  );
};

export default WriteConsumerStatement;
