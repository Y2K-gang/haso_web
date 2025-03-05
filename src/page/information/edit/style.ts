import LeftArrowIcons from "@/components/icons/arrow/left";
import styled from "styled-components";

export const InfoEditAll = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
export const InfoEditSecondArea = styled.div`
  width: 1090px;
`;
export const TitleEdit1 = styled.span`
  height: 30px;
  width: 80px;
  display: flex;
  align-items: start;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[2]};
  font-family: "Pretendard-Bold";
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary[400]};
`;
export const TitleEdit2 = styled.span`
  height: 30px;
  width: 170px;
  display: flex;
  align-items: start;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[2]};
  font-family: "Pretendard-Bold";
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary[400]};
`;
export const TitleEditArea1 = styled.div`
  width: 1090px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
`;
export const TitleEditArea2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1090px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
`;
export const EditDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
export const MyPostImgDiv = styled.div``;
export const StyledLeftArrowIcon = styled(LeftArrowIcons)`
  position: absolute;
  width: 17px;
  top: 45px;
  left: 90px;
  &:hover {
    cursor: pointer;
  }
`;
