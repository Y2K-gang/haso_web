import styled from "styled-components";

export const AllWriteArea = styled.form`
  display: flex;
  flex-direction: column;
  width: 882px;
`;
export const TopArea = styled.div`
  margin-top: 72px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const RightTopArea = styled.div`
  width: 441px;
  height: 399px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const MiddleArea = styled.div`
  margin-top: 27.93px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const MiddleLocal = styled.div`
  width: 757.05px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 22px;
`;

export const MiddleOfTopArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FileInputWrapper = styled.div`
  background-color: #d1d1d1;
  width: 399px;
  height: 399px;
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
  padding: 11.97px 14.7px;
  resize: none;
  width: 100%;
  height: 319.2px;
  &::placeholder {
    color: #d1d1d1;
    font-size: 16px;
  }
  &:focus {
    border: 2px solid #327dff;
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
  padding: 0 14.7px;
  height: 51.87px;
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
    border: 2px solid #327dff;
    outline: none;
  }
  &.error {
    border: 2px solid #ff3c3c;
  }
`;

// Inputs들 글자수 제한 추가하기
export const Inputs = styled(InputBase)`
  width: 441px;
`;

export const PriceInput = styled(InputBase)`
  width: 257.25px;
`;

export const QuantityInput = styled(InputBase)`
  width: 169.05px;
`;

export const Ps = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 7.98px;
`;
export const SelectorsArea = styled.div`
  height: 119.7px;
  display: flex;
  flex-wrap: wrap;
  gap: 14.7px;
  justify-content: space-between;
`;

export const Local = styled.select`
  border: 2px solid #d1d1d1;
  border-radius: 5px;
  width: 147px;
  height: 51.87px;
  padding-left: 14.7px;
  padding-right: 44.1px;
  font-size: 16px;
  appearance: none;
  background-image: url("src/assets/image/vector.svg");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 17.64px;
  &:hover {
    cursor: pointer;
  }
`;
export const AllBottoms = styled.div`
  height: 542.64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 159.6px;
`;
export const SubmitBtn = styled.button`
  width: 200px;
  height: 60px;
  background-color: #327dff;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;
export const CencelBtn = styled.button`
  width: 200px;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 5px;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
`;

export const DivInRegisterForm = styled.div``;

export const OptionInRegisterForm = styled.option``;
