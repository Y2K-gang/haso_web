import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import vectorImg from '@/assets/image/vector.svg';
import AddBtn from "@/components/addBtn";
import userDataList from "@/data";  // 사용자 데이터 리스트를 import
import ManageProduct from "@/components/manageProduct";

const Statement = () => {
  const navigate = useNavigate();
  const { userId, productId } = useParams(); // userId와 productId 추출

  // userId에 맞는 사용자 찾기
  const user = userDataList.find((u) => u.id === parseInt(userId)); 

  // 사용자 정보가 없으면 오류 처리
  if (!user) {
    return <div>사용자 정보를 찾을 수 없습니다.</div>;
  }

  const { name } = user; // 사용자 이름 추출

  const handleSelection = (type) => {
    // 선택한 타입에 맞는 경로로 이동
    if (type === "receiver") {
      navigate(`/statement/${userId}/${productId}/receiver`);
    } else {
      navigate(`/statement/${userId}/${productId}/provider`);
    }
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <S.StatementAll>
      <S.StatementTopArea>
        <S.StatementFontArea>
          <S.StatementVector src={vectorImg} onClick={handleGoBack} />
          {name}과의 거래명세서예요
        </S.StatementFontArea>
      </S.StatementTopArea>
      <ManageProduct text={'공급자용'} date={'2025.01.06'} onClick={() => handleSelection("receiver")} />
      <ManageProduct text={'공급받는자용'} date={'2025.01.06'} onClick={() => handleSelection("provider")} />
    </S.StatementAll>
  );
};

export default Statement;
