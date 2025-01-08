import styled from "styled-components";

interface CateBackProps {
  isSelected: boolean;
}

export const CateBack = styled.div<CateBackProps>`
  background-color: ${({ isSelected }) => (isSelected ? "#327DFF" : "#E8E8E8")};
  color: ${({ isSelected }) => (isSelected ? "#FFFFFF" : "#000000")};
  width: 8.5vw;
  height: 6.5vh;
  border-radius: 5px;
  padding: 0.5vh 0.5vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.1s, color 0.1s; /* 부드러운 전환 효과 */
  
  img {
    width: 1.3vw;
  }
`;
