import * as S from "./style";

const Category = (text: string) => {
  return (
    <S.CategoryAll>
        <S.CategoryText>{text}</S.CategoryText>
    </S.CategoryAll>
  )
}

export default Category