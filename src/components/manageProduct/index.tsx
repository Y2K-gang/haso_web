import * as S from "./style";

const ManageProduct = ({ text, date, onClick }) => {
  return (
    <S.ManageProductBack onClick={onClick}> {/* 클릭 이벤트 추가 */}
      <S.ManageProductContents>
        <span>{text}</span>
        <span>{date}</span>
      </S.ManageProductContents>
    </S.ManageProductBack>
  );
};

export default ManageProduct;
