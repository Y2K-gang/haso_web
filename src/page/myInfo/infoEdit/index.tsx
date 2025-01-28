import { useNavigate } from "react-router-dom";
import * as S from "./style";
import React from "react";
import InfoEditForm from "@/components/form/editInfoForm";

const InfoEdit = () => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(-1);
  };
  return (
    <S.InfoEditAll>
      <S.InfoEditSecondArea>
        <S.MyPostImgDiv onClick={onGoBack}>
          <S.StyledLeftArrowIcon />
        </S.MyPostImgDiv>
        <S.EditDetails>
          <S.TitleEditArea>
            <S.TitleEdit1>정보수정</S.TitleEdit1>
          </S.TitleEditArea>
          <InfoEditForm />
          <S.TitleEditArea>
            <S.TitleEdit2>회원탈퇴 및 계정삭제</S.TitleEdit2>
          </S.TitleEditArea>
          {/* 버튼 추가 */}
        </S.EditDetails>
      </S.InfoEditSecondArea>
    </S.InfoEditAll>
  );
};

export default InfoEdit;
