import * as S from "./style";
import ManageUser from "@/components/manageUser";
import wasteBasket from "@/assets/image/wasteBasket.svg";
import AddBtn from "@/components/addBtn";
import userDataList from "@/data";
import { useNavigate } from "react-router-dom";
import hasoAxios from "@/libs/axios";

const ClientList = () => {
  const navigate = useNavigate();
  // const handleDeleteUser = async (userId) => {
  //   try {
  //     const response = await hasoAxios.deleteData(`/business/${userId}`,{});
  //     if (response.status === 200) {
  //       alert("사용자가 성공적으로 삭제되었습니다.");
  //     }
  //   } catch (error) {
  //     console.error("사용자 삭제 중 오류 발생:", error);
  //     alert("사용자를 삭제할 수 없습니다. 다시 시도해주세요.");
  //   }
  // };

  const handleUserClick = (user) => {
    navigate(`/businessHistory/${user.id}`); // 사용자의 ID를 URL에 포함
  };

  const handleAddClient = () => {
    navigate(`/addClient?`);
  };

  return (
    <S.ClientAll>
      <S.ClientListTopArea>
        거래처 리스트
        <S.WasteImg src={wasteBasket} alt="휴지통" onClick={() => handleDeleteUser(userId)} />
      </S.ClientListTopArea>
      {userDataList.map((user) => (
        <ManageUser
          key={user.id}
          user={user}
          onClick={() => handleUserClick(user)} // 클릭 이벤트 전달
        />
      ))}
      <AddBtn onClick={handleAddClient} />
    </S.ClientAll>
  );
};

export default ClientList;
