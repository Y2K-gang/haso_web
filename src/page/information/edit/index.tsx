import { useNavigate } from "react-router-dom";
import * as S from "./style";
import InfoEditForm from "@/components/form/editInfoForm";
import LargeButton from "@/components/button/large";
import SmallButton from "@/components/button/small";

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
          <S.TitleEditArea1>
            <S.TitleEdit1>정보수정</S.TitleEdit1>
          </S.TitleEditArea1>
          <InfoEditForm />
          <LargeButton children='저장하기' />
          <S.TitleEditArea2>
            <S.TitleEdit2>회원탈퇴 및 계정삭제</S.TitleEdit2>
            <SmallButton variant="secondary" children="삭제하기" />
          </S.TitleEditArea2>
        </S.EditDetails>
      </S.InfoEditSecondArea>
    </S.InfoEditAll>
  );
};

export default InfoEdit;
