import { useNavigate } from "react-router-dom";
import * as S from "./style";
import React from "react";
import Input from "@/components/input";

const InfoEditForm = () => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(-1);
  };
  return (
    <S.InfoEditFormAll>
      <S.EditContents>
        <S.Spans>아이디</S.Spans>
        <Input placeHolder={'아이디'} />
      </S.EditContents>
      <S.EditContents>
        <S.Spans>비밀번호</S.Spans>
        <Input placeHolder={'비밀번호'} />
      </S.EditContents>
      <S.EditContents>
        <S.Spans>성명</S.Spans>
        <Input placeHolder={'성명'} />
      </S.EditContents>
      <S.EditContents>
        <S.Spans>전화번호</S.Spans>
        <Input placeHolder={'전화번호'} />
      </S.EditContents>
      <S.EditContents>
        <S.Spans>사업자 등록번호</S.Spans>
        <Input placeHolder={'사업자 등록번호'} />
      </S.EditContents>
      <S.EditContents>
        <S.Spans>팩스번호</S.Spans>
        <Input placeHolder={'팩스번호'} />
      </S.EditContents>
      <S.EditContents>
        <S.Spans>사업장 번호</S.Spans>
        <Input placeHolder={'사업장 번호'} />
      </S.EditContents>
      <S.EditContents>
        <S.Spans>상호명</S.Spans>
        <Input placeHolder={'상호명'} />
      </S.EditContents>
    </S.InfoEditFormAll>
  );
};

export default InfoEditForm;