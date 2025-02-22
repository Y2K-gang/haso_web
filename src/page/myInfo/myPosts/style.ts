import styled from "styled-components";
import LeftArrowIcons from "@/components/icons/arrow/left";

export const UserInfoProductWrapper = styled.div`
  width: 950px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const MyPostImgDiv = styled.div`
`;
export const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 40px 40px;
  padding-top: 50px;

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
export const MyPostsAll = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledLeftArrowIcon = styled(LeftArrowIcons)`
  position: absolute;
  width: 17px;
  top: 45px;
  left: 90px;
  &:hover{
    cursor: pointer;
  }
`;
