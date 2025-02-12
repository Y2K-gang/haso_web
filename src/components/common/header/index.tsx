import React from "react";
import * as S from "./style";
import LogoIcons from "@/components/icons/logo";
import ProfileIcon from "@/components/icons/profile";
import CustomDropdown from "@/components/dropdown";

const Header = () => {
  const handleSelect = (value: string) => {
    console.log("선택한 값:", value);
  };

  const 지역옵션 = ["서울", "부산", "대구"];
  const 품종옵션 = ["고등어", "갈치", "참치"];

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.LogoSection>
          <LogoIcons width={80} height={50} />
        </S.LogoSection>

        <S.SearchSection>
          <S.SearchContainer>
            <S.SearchInput placeholder="검색어를 입력해주세요" />
            <S.ButtonGroup>
              <CustomDropdown options={지역옵션} onSelect={handleSelect} text="지역 선택" />
              <CustomDropdown options={품종옵션} onSelect={handleSelect} text="품종 선택" />
            </S.ButtonGroup>
          </S.SearchContainer>
        </S.SearchSection>

        <S.Navigation>
          <S.NavLink>상품 등록</S.NavLink>
          <S.NavLink>채팅</S.NavLink>
          <S.NavLink>거래처 관리</S.NavLink>
          <ProfileIcon size="small" />
        </S.Navigation>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
