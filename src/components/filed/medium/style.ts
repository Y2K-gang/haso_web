import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  @media (max-width: 1280px) {
    gap: 12px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[3]};
  font-family: "Pretendard-Medium";
  color: ${({ theme }) => theme.colors.text.Dark};
  text-align: left;

  @media (max-width: 1280px) {
    font-size: ${({ theme }) => theme.typography.fontSizes.heading[4]};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSizes.body[2]};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 90%;
  height: 54px;
  padding: 15px 20px;
  padding-right: 40px;
  font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
  background-color: ${({ theme }) => theme.colors.white} !important;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 5px;
  outline: none;
  color: ${({ theme }) => theme.colors.text.Dark} !important;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[400]};
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
    color: ${({ theme }) => theme.colors.gray[400]};
    font-family: "Pretendard-Medium";
  }

  &:autofill {
    background-color: ${({ theme }) => theme.colors.white} !important;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.white} inset !important;
    -webkit-text-fill-color: ${({ theme }) =>
      theme.colors.text.Dark} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media (max-width: 1280px) {
    width: 100%;
    height: 48px;
    max-width: 250px;
    padding: 12px 18px;
    padding-right: 35px;
    font-size: ${({ theme }) => theme.typography.fontSizes.body[2]};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 42px;
    max-width: 220px;
    padding: 10px 15px;
    padding-right: 30px;
    font-size: ${({ theme }) => theme.typography.fontSizes.body[2]};
  }
`;
