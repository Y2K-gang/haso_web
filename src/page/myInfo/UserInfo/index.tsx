import Category from "@/components/category";
import * as S from "./style";
import ProfileIcon from "@/components/icons/profile";
import SettingIcon from "@/components/icons/setting";
import ProductCard from "@/components/product/card";
import TabBar from "@/components/tapbar";
import { useNavigate } from "react-router-dom";
import TabBarWithoutMore from "@/components/topbarWithoutMore";

const UserInfo = () => {
  const navigate = useNavigate();

  const onMoreClick = () => {
    navigate("/myInformation/myPosts");
  };
  const onEditClick = () => {
    navigate("/myInformation/informationEdit");
  };

  const products = [
    { title: "고등어", money: 10000, weight: "kg", location: "서울" },
    { title: "광어", money: 20000, weight: "kg", location: "부산" },
    { title: "오징어", money: 15000, weight: "kg", location: "제주" },
    { title: "오징어", money: 15000, weight: "kg", location: "제주" },
  ];

  return (
    <S.UserInfoAll>
      <S.FirstArea>
        <S.InFirstArea>
          <S.ProfileInfos>
            <ProfileIcon />
            <S.InProfileInfosTexts>
              <S.UserName>y2k갱</S.UserName>
              <S.Logout>로그아웃</S.Logout>
            </S.InProfileInfosTexts>
          </S.ProfileInfos>
          <S.EditInfoArea onClick={onEditClick}>
            <S.StyledLeftArrowIcons />
            <S.EditUserInfoText>회원 정보 수정</S.EditUserInfoText>
          </S.EditInfoArea>
        </S.InFirstArea>
      </S.FirstArea>
      <S.SecondArea>
        <S.InSecondArea>
          <S.UserInfoCategory>
            <TabBarWithoutMore title="취급 상품" />
            <S.Categorys>
              <Category text={"어류"} />
            </S.Categorys>
          </S.UserInfoCategory>
          <S.UserInfoProductWrapper>
            <TabBar title="내 게시물" onMoreClick={onMoreClick} />
            <S.ProductCardContainer>
              {products.slice(0, 3).map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  money={product.money}
                  weight={product.weight}
                  location={product.location}
                />
              ))}
            </S.ProductCardContainer>
          </S.UserInfoProductWrapper>
        </S.InSecondArea>
      </S.SecondArea>
    </S.UserInfoAll>
  );
};

export default UserInfo;
