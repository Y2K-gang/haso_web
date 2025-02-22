import SettingIcon from "@/components/icons/setting";
import styled from "styled-components";

export const UserInfoAll = styled.div`
`;
export const FirstArea = styled.span`
background-color: ${({theme}) => theme.colors.primary[100]};
width: 100%;
height: 300px;
display: flex;
justify-content: center;
`;
export const InFirstArea = styled.div`
width: 900px;
height: 100%;
align-items: center;
display: flex;
justify-content: space-between;
`;
export const InSecondArea = styled.div`
margin-top: 35px;
`;
export const SecondArea = styled.div`
width: 100%;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`;
export const EditInfoArea = styled.div`
width: 120px;
display: flex;
justify-content: space-between;
align-items: center;
&:hover{
    cursor: pointer;
}
`;
export const EditUserInfoText = styled.span`
font-size: ${({theme}) => theme.typography.fontSizes.body[1]};
font-family: 'Pretendard-Medium';
`;
export const ProfileInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
`;
export const InProfileInfosTexts = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const UserName = styled.span`
color: ${({theme}) => theme.colors.gray[1000]};
font-size: ${({theme}) => theme.typography.fontSizes.title[1]};
font-family: 'Pretendard-Bold';
`;
export const Logout = styled.span`
color: ${({theme}) => theme.colors.error};
font-family: 'Pretendard-SemiBold';
`;
export const UserInfoCategory = styled.div`
  width: 900px;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
export const UserInfoProductWrapper = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
`;
export const Categorys = styled.div`
  padding: 30px 30px;

`;
export const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 30px 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
    justify-items: center;
  }
`;
export const StyledLeftArrowIcons = styled(SettingIcon)`
  width: 20px;
`;