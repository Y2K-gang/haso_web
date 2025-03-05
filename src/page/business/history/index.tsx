import AddBtn from "@/components/button/add";
import * as S from "./style";
import ManageProduct from "@/components/manageProduct";
import { useNavigate, useParams } from "react-router-dom";
import userDataList from "@/data";
import vectorImg from "@/assets/image/vector.svg";
import { paths } from "@/constants/path";

const BusinessHistory = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const user = userDataList.find((u) => u.id === parseInt(userId))

  if (!user) {
    return <div>사용자 정보를 찾을 수 없습니다.</div>;
  }

  const { name, transactions } = user;

  const handleTransactionClick = (productId: number) => {
    navigate(`/statement/${userId}/${productId}`);
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleAddBusiness = () => {
    navigate(paths.addBusiness);
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
          key={transaction.id}
          text={transaction.text}
          date={transaction.date}
          onClick={() => handleTransactionClick(transaction.id)} // 클릭 이벤트 전달
        />
      ))}
      <AddBtn onClick={handleAddBusiness} />
    </S.BusinessHistoryAll>
  );
};

export default BusinessHistory;
