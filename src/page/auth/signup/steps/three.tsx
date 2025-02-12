import React, { useState } from "react";
import * as S from "./style";
import { FormGap } from "@/page/auth/signup/steps/style";
import FormField from "@/components/filed/large";
import { StepProps } from "./index";
import SmallButton from "@/components/button/medium";
import Modal from "@/modal/auth";
import { FaTimes } from "react-icons/fa"; // X 아이콘

const Three = ({ signUp,validate, onChange }: StepProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <FormGap>
      <S.FaxModal>
        <S.Label>사업장 등록번호</S.Label>
        <SmallButton variant="primary" onClick={handleModalOpen}>
          인증하기
        </SmallButton>
      </S.FaxModal>
      <FormField
        label="사업장 번호"
        name="store_no"
        placeholder="사업장 번호를 입력해주세요."
        value={signUp.store_no}
        onChange={onChange}
      />
      <FormField
        label="팩스번호"
        name="fax_no"
        placeholder="팩스번호를 입력해주세요."
        value={signUp.fax_no}
        onChange={onChange}
      />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <S.ModalContent>
          <S.ModalHeader>
            <S.ModalTitle>사업자 인증</S.ModalTitle>
            <S.CloseButton onClick={handleModalClose}>
              <FaTimes size={20} />
            </S.CloseButton>
          </S.ModalHeader>
          <S.ModalBody>
            <FormField
              label="사업자 등록번호"
              name="business_registration_number"
              placeholder="사업자 등록번호를 입력해주세요."
              value={validate?.b_no}
              onChange={onChange}
            />
            <FormField
              label="개업 일자"
              name="business_start_date"
              placeholder="개업 일자를 입력해주세요."
              value={validate?.start_dt}
              onChange={onChange}
            />
            <FormField
              label="대표자 성명"
              name="ceo_name"
              placeholder="대표자 성명을 입력해주세요."
              value={validate?.p_nm}
              onChange={onChange}
            />
          </S.ModalBody>
          <S.ModalFooter>
            <SmallButton variant="primary" onClick={handleModalClose}>
              확인
            </SmallButton>
          </S.ModalFooter>
        </S.ModalContent>
      </Modal>
    </FormGap>
  );
};

export default Three;
