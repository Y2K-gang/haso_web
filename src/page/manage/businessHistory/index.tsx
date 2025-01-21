import AddBtn from "@/components/addBtn";
import * as S from "./style";
import ManageProduct from "@/components/manageProduct";
import { useNavigate, useParams } from "react-router-dom";
import userDataList from "@/data";
import vectorImg from "@/assets/image/vector.svg";

const BusinessHistory = () => {
  const navigate = useNavigate();
  const { userId } = useParams(); // URL에서 userId 추출
  const user = userDataList.find((u) => u.id === parseInt(userId)); // userId로 해당 사용자 찾기

  if (!user) {
    return <div>사용자 정보를 찾을 수 없습니다.</div>; // 유효하지 않은 사용자 ID 처리
  }

  const { name, transactions } = user; // 사용자 이름과 거래 내역 추출

  const handleTransactionClick = (productId) => {
    navigate(`/statement/${userId}/${productId}`); // 거래별 ID로 이동
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleAddBusiness = () => {
    navigate(`/addBusiness`);
  };

  return (
    <S.BusinessHistoryAll>
      <S.HistoryListTopArea>
        <S.BusinessFontArea>
          <S.BusinessVector src={vectorImg} onClick={handleGoBack} />
          {name}과의 거래내역이에요
        </S.BusinessFontArea>
      </S.HistoryListTopArea>
      {transactions.map((transaction) => (
        <ManageProduct
          key={transaction.id} // 고유 키로 id 사용
          text={transaction.text} // 거래 내용 전달
          date={transaction.date} // 거래 날짜 전달
          onClick={() => handleTransactionClick(transaction.id)} // 클릭 이벤트 전달
        />
      ))}
      <AddBtn onClick={handleAddBusiness} />
    </S.BusinessHistoryAll>
  );
};

export default BusinessHistory;
