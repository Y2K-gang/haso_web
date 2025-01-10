import styled from "styled-components";

export const AllWriteArea = styled.form`
  display: flex;
  flex-direction: column;
  width: 60vw;
`;
export const TopArea = styled.div`
  margin-top: 9vh;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const RightTopArea = styled.div`
  width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const MiddleArea = styled.div`
  margin-top: 3.5vh;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const MiddleLocal = styled.div`
  width: 51.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1.5vw;
`;

export const MiddleOfTopArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FileInputWrapper = styled.div`
  background-color: #d1d1d1;
  width: 50vh;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const DetailInfo = styled.textarea`
  border: 2px solid #d1d1d1;
  border-radius: 5px;
  color: black;
  font-size: 16px;
  font-family: pretandard;
  padding: 1.5vh 1vw;
  resize: none;
  width: 100%;
  height: 40vh;
  &::placeholder {
    color: #d1d1d1;
    font-size: 16px;
  }
  &:focus {
    border: 2px solid #327DFF;
    outline: none;
  }
  &.error {
    border: 2px solid #ff3c3c;
  }
`;

const InputBase = styled.input`
  border: 2px solid #d1d1d1;
  border-radius: 5px;
  color: black;
  font-size: 16px;
  padding: 0 1vw;
  height: 6.5vh;
  &::placeholder {
    color: #d1d1d1;
    font-size: 16px;
  }
  -moz-appearance: textfield;
  -webkit-appearance: none;
  appearance: none;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    border: 2px solid #327DFF;
    outline: none;
  }
  &.error {
    border: 2px solid #ff3c3c;
  }
`;

// Inputs들 글자수 제한 추가하기
export const Inputs = styled(InputBase)`
  width: 30vw;
`;

export const PriceInput = styled(InputBase)`
  width: 17.5vw;
`;

export const QuantityInput = styled(InputBase)`
  width: 11.5vw;
`;

export const Ps = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
export const SelectorsArea = styled.div`
height: 15vh;
display: flex;
  flex-wrap: wrap;
  gap: 1vw;
  justify-content: space-between;
`;

export const Local = styled.select`
  border: 2px solid #d1d1d1;
  border-radius: 5px;
  width: 10vw;
  height: 6.5vh;
  padding-left: 1vw;
  padding-right: 3vw;
  font-size: 16px;
  appearance: none;
  background-image: url('src/assets/image/vector.svg');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 1.2vw;
  &:hover{
    cursor: pointer;
  }
`;
export const AllBottoms = styled.div`
  height: 68vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20vh;
`;
export const SubmitBtn = styled.button`
  width: 13.8vw;
  height: 7.5vh;
  background-color: #327DFF;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;
export const CencelBtn = styled.button`
  width: 13.8vw;
  height: 7.5vh;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 5px;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
`;

export const DivInRegisterForm = styled.div`

`;

export const OptionInRegisterForm = styled.option`

`;