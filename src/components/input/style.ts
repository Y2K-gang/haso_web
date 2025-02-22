import styled from "styled-components";

export const InputAll = styled.input`
    width: 290px;
    height: 50px;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid ${({theme}) => theme.colors.gray[500]};
    font-size: ${({theme}) => theme.typography.fontSizes.body[1]};
    font-family: 'Pretendard-Medium';
    ;
`;