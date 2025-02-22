import styled from "styled-components";

export const CategoryAll = styled.div`
width: 120px;
height: 50px;
border-radius: 5px;
border: 2px solid ${({theme}) => theme.colors.primary[400]};
display: flex;
align-items: center;
justify-content: center;
`;
export const CategoryText = styled.span`
font-size: ${({theme}) => theme.typography.fontSizes.heading[2]};
font-family: 'Pretendard-Bold';
`;