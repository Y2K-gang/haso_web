// SearchUser.tsx
import { useState } from "react";
import * as S from "./style";
import searchImg from "@/assets/image/search.svg";
import SearchModal from "@/modal/searchUser";

const SearchUser = ({ onSearch, users }) => {
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
    setIsModalOpen(value.length > 0);
  };

  const handleSelectUser = (name) => {
    setQuery(name);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.SearchClientAll>
        <S.SearchInput
          value={query}
          onChange={handleChange}
          placeholder="사용자를 입력해주세요"
        />
        <S.SearchBtn>
          <S.SearchImg src={searchImg} />
        </S.SearchBtn>
      </S.SearchClientAll>

      {isModalOpen && <SearchModal users={users} onSelectUser={handleSelectUser} onClose={handleCloseModal} />}
    </>
  );
};

export default SearchUser;
