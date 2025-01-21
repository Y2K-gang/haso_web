import WriteCunsumerStatement from "@/components/form/manage/writeStatementForm";
import * as S from "./style"

const AddBusiness = () => {
    return (
        <S.AddBusiness>
        <S.AddBusinessTitle>거래명세서 작성</S.AddBusinessTitle>
        <WriteCunsumerStatement />
        {/* 버튼 컴포넌트 추가 및 경로 연결 필요 */}
        </S.AddBusiness>
    )
}

export default AddBusiness;