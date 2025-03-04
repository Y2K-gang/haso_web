import styled from "styled-components";

interface CateBackProps {
  isSelected: boolean;
}

export const CateBack = styled.div<CateBackProps>`
  background-color: ${({ isSelected }) => (isSelected ? "#327DFF" : "#E8E8E8")};
  color: ${({ isSelected }) => (isSelected ? "#FFFFFF" : "#000000")};
  width: 120px;
  height: 50px;
  border-radius: 5px;
  padding: 12px 13px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[3]};
  font-family: "Pretendard-Bold";
  cursor: pointer;
  transition: background-color 0.1s, color 0.1s;
  
  img {
    width: 15px;
  }
`;
