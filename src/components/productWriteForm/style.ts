import styled from "styled-components";

export const AllWriteArea = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 60vw;
`;
export const TopArea = styled.div`
  margin-top: 9vh;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const MiddleArea = styled.div`
  margin-top: 3vh;
  background-color: yellow;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const BottomArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const MiddleOfTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5vh;
`;
export const DetailInfo = styled.textarea`
  resize: none;
  width: 100%;
  height: 30vh;
`;
export const FileInput = styled.input`
  background-color: #d1d1d1;
  width: 50vh;
  height: 50vh;
  &:hover {
    cursor: pointer;
  }
`;
export const Inputs = styled.input`
  border: 2px solid #d1d1d1;
  border-radius: 5px;
  color: #d1d1d1;
  width: 30vw;
  height: 6.5vh;
  padding-left: 1vw;
  padding-right: 1vw;
  font-size: 16px;
  margin-bottom: 2.5vh;
`;
export const PriceInput = styled.input`
  border: 2px solid #d1d1d1;
  border-radius: 5px;
  color: #d1d1d1;
  width: 17.5vw;
  height: 6.5vh;
  padding-left: 1vw;
  padding-right: 1vw;
  font-size: 16px;
  -moz-appearance: textfield; /* Firefox 스피너 제거 */
  -webkit-appearance: none; /* Chrome, Safari 스피너 제거 */
  appearance: none; /* 기타 브라우저 스피너 제거 */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }`;
export const QuantityInput = styled.input`
  border: 2px solid #d1d1d1;
  border-radius: 5px;
  color: #d1d1d1;
  width: 11.5vw;
  height: 6.5vh;
  padding-left: 1vw;
  padding-right: 1vw;
  font-size: 16px;
  -moz-appearance: textfield; /* Firefox 스피너 제거 */
  -webkit-appearance: none; /* Chrome, Safari 스피너 제거 */
  appearance: none; /* 기타 브라우저 스피너 제거 */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const Ps = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1vh;
`;
