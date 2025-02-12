import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.gray[400]};
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h3`
  font-family: "Pretendard-Bold";
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[3]};
  color: ${({ theme }) => theme.colors.black};
`;

export const WeightToMoney = styled.div`
  display: flex;
  align-items: center;

  span {
    font-family: "kjcGothic-Medium";
    font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Location = styled.h4`
  font-family: "Pretendard-SemiBold";
  font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
  color: ${({ theme }) => theme.colors.gray[600]};
`;
