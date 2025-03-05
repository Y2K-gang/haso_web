import { useNavigate } from "react-router-dom";
import * as S from "./style";
import vectorImg from "@/assets/image/vector.svg";

const ReceiverPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
      };
      return (
        <S.ProviderAll>
          <S.ProviderTop>
            <S.ProviderTopOfTop>
              <S.StatementVector src={vectorImg} onClick={handleGoBack} />
              <span>거래 명세서</span>
            </S.ProviderTopOfTop>
            <S.ProviderHeader>거래처 정보</S.ProviderHeader>
          </S.ProviderTop>
          <S.ProviderMiddle>
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
                  <S.ContentsSpans>
                    대구광역시 달성군 구지면 과학마을로 3길 14
                  </S.ContentsSpans>
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
          </S.ProviderMiddle>
          <S.ReceiverBottom>
            <S.ProviderHeader>거래 정보</S.ProviderHeader>
            <S.ReceiverTables>
              <S.TradeTop>
                <tr>
                  <th>품목 및 품종</th>
                  <th>규격</th>
                  <th>수량</th>
                  <th>단가</th>
                  <th>공급가액</th>
                  <th>부가세액</th>
                </tr>
                <tr>
                  <td>고등어</td>
                  <td>5미</td>
                  <td>3kg</td>
                  <td>90,000</td>
                  <td>60,000</td>
                  <td>30,000</td>
                </tr>
              </S.TradeTop>
              <S.TableMiddle>
                <tr>
                  <th>수량</th>
                  <td>5kg</td>
                  <th>공급가액</th>
                  <td>140,000</td>
                  <th>VAT</th>
                  <td>50,000</td>
                  <th>합계</th>
                  <td>190,000</td>
                  <th>인수</th>
                  <td>성명</td>
                </tr>
              </S.TableMiddle>
              <S.TableBottom>
                <tr>
                  <th>미수금</th>
                  <td>0</td>
                  <th>입금계좌</th>
                  <td>농협 351-1234-1234-12</td>
                </tr>
              </S.TableBottom>
            </S.ReceiverTables>
          </S.ReceiverBottom>
        </S.ProviderAll>
      );
};

export default ReceiverPage;
