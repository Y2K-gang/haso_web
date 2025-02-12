import ReactDOM from "react-dom";
import * as S from "./style";
import useModalStore from "@/stores/modal/modal.store";

const Modal = () => {
  const { isOpen, isClose, children } = useModalStore();

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalOverlay onClick={isClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalContent>
    </S.ModalOverlay>,
    document.body
  );
};

export default Modal;
