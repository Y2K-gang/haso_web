import { useState } from "react";
import * as S from './style';
import searchImg from '@/assets/image/search.svg';

const SearchUser = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // 검색어 상태

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // 부모 컴포넌트로 검색어 전달
  };

  return (
    <S.SearchClientAll>
      <S.SearchInput
        value={query}
        onChange={handleChange}
        placeholder='사용자를 입력해주세요'
      />
      <S.SearchBtn><S.SearchImg src={searchImg} /></S.SearchBtn>
    </S.SearchClientAll>
  );
};

export default SearchUser;
