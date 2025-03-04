import styled from "styled-components";

export const AllAreaOfDetail = styled.div`
  display: flex;
  width: 975px;
  justify-content: space-between;
  margin-top: 72px;
  align-items: center;
`;
export const InfoArea = styled.div`
  height: 448px;
  width: 471px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const InfoAreaInArea = styled.div`
  height: 109px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Groups = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ImgArea = styled.div`
  width: 445px;
  height: 442px;
  border-radius: 10px;
`;

export const Title = styled.span`
    font-size: ${({ theme }) => theme.typography.fontSizes.title[1]};
    font-family: "Pretendard-Bold";
`;

export const SemiBoldFonts = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[1]};
  font-family: "Pretendard-Bold";
`;
export const ExplainContents = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[5]};
  font-family: "Pretendard-SemiBold";
`;
export const CategoryArea = styled.div`
  width: 120px;
  height: 89px;
  border: 2px solid ${({ theme }) => theme.colors.primary[400]};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[3]};
  font-family: "Pretendard-Bold";
  display: flex;
  align-items: center;
  justify-content: center;
`;
