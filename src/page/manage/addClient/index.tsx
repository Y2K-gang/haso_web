import { useState } from "react";
import * as S from "./style";
import SearchUser from "@/components/searchUser";
import Modal from "@/modal/search";

// 사용자 타입 정의
type User = {
  id: number;
  name: string;
};

const AddClient = () => {
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 관리
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]); // 필터링된 사용자 목록 (타입 명시)
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기/닫기 상태

  const users: User[] = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "김철수" },
    { id: 3, name: "이영희" },
    { id: 4, name: "박지민" },
    { id: 5, name: "박시현" },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // 이름을 기준으로 필터링
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered); // 타입 오류 해결
    setIsModalOpen(true); // 검색 후 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <S.AddClientAll>
      <S.AddClientContentsArea>
        <S.SearchUser>
          <S.InfoTitles>사용자 검색</S.InfoTitles>
          <SearchUser onSearch={handleSearch} />
        </S.SearchUser>
        <S.ClientInfo>
          <S.InfoTitles>거래처 정보</S.InfoTitles>
          <S.ClientInfos>
            <S.ClientInfoGroups>
              <S.ClientInfoOne>
                <S.InfoTitles>사업자 등록번호</S.InfoTitles>
                <S.InfoContents>정보없음</S.InfoContents>
              </S.ClientInfoOne>
              <S.ClientInfoOne>
                <S.InfoTitles>팩스번호</S.InfoTitles>
                <S.InfoContents>정보없음</S.InfoContents>
              </S.ClientInfoOne>
            </S.ClientInfoGroups>
            <S.ClientInfoGroups>
              <S.ClientInfoOne>
                <S.InfoTitles>사업장 번호</S.InfoTitles>
                <S.InfoContents>정보없음</S.InfoContents>
              </S.ClientInfoOne>
              <S.ClientInfoOne>
                <S.InfoTitles>상호명</S.InfoTitles>
                <S.InfoContents>정보없음</S.InfoContents>
              </S.ClientInfoOne>
            </S.ClientInfoGroups>
          </S.ClientInfos>
        </S.ClientInfo>
      </S.AddClientContentsArea>

      {/* 모달 창 */}
      {isModalOpen && (
        <Modal users={filteredUsers} onClose={closeModal} />
      )}

      {/* 버튼 컴포넌트 추가 및 서버 연결 */}
    </S.AddClientAll>
  );
};

export default AddClient;
