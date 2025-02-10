import styled from "styled-components";

interface CateBackProps {
  isSelected: boolean;
}

export const CateBack = styled.div<CateBackProps>`
  background-color: ${({ isSelected }) => (isSelected ? "#327DFF" : "#E8E8E8")};
  color: ${({ isSelected }) => (isSelected ? "#FFFFFF" : "#000000")};
  width: 124.95px;
  height: 51.87px;
  border-radius: 5px;
  padding: 3.99px 7.35px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.1s, color 0.1s; /* 부드러운 전환 효과 */

  img {
    width: 19.11px;
  }
`;
