import styled from "styled-components";

export const InfoEditFormAll = styled.form`
width: 1050px;
height: 557px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
`;

export const EditContents = styled.div`
width: 450px;
display: flex;
justify-content: space-between;
align-items: flex-start;
`;

export const Spans = styled.span`
    font-size: ${({theme}) => theme.typography.fontSizes.body[1]};
    font-family: 'Pretendard-Medium';
`;