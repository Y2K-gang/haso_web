import styled from "styled-components";

export const SearchClientAll = styled.form`
  width: 55vw;
  height: 7vh;
  border: 2px solid ${({ theme }) => theme.colors.gray[500]};
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  transition: border 0.3s ease;
  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.primary[400]};
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 1vw;
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[3]};
  font-family: "Pretendard-Bold";
  outline: none;
  border-radius: 10px;
  background-color: transparent;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
export const SearchBtn = styled.button`
  width: 3vw;
  border: none;
  color: none;
  border-radius: 10px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
export const SearchImg = styled.img`
  width: 1.5vw;
`;
