import styled from "styled-components";

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[3]};
  font-family: "Pretendard-Semibold";
  color: ${({ theme }) => theme.colors.text.Dark};
  text-align: left;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSizes.heading[4]};
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.fontSizes.body[2]};
  }
`;

export const FormGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const TelAccess = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

export const FaxModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

export const InputWrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #999;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
