import { useState } from "react";
import SearchUser from "@/components/searchUser";
import * as S from "./style";

const AddClient = () => {
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 관리
  const [filteredUsers, setFilteredUsers] = useState([]); // 필터링된 사용자 목록

  const users = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "김철수" },
    { id: 3, name: "이영희" },
    { id: 4, name: "박지민" },
    // 이 부분은 실제 API나 데이터를 통해 가져올 수 있습니다.
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    // 이름을 기준으로 필터링
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <S.AddClientAll>
      <S.AddClientContentsArea>
        <S.SearchUser>
          <S.InfoTitles>사용자 검색</S.InfoTitles>
          <SearchUser onSearch={handleSearch} />
          <S.UserList>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <S.UserItem key={user.id}>
                <S.UserName>{user.name}</S.UserName>
              </S.UserItem>
            ))
          ) : (
            // <S.NoResults>검색 결과가 없습니다.</S.NoResults>
            ""
          )}
        </S.UserList>
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
      {/* 버튼 컴포넌트 가져와서 추가 및 서버 연결하기 */}
    </S.AddClientAll>
  );
};

export default AddClient;
