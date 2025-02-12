import styled from "styled-components";

export const BusinessHistoryAll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const HistoryListTopArea = styled.div`
    margin-top: 3vh;
    padding-right: 2vw;
    width: 90vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BusinessFontArea = styled.div`
    width: 22vw;
    font-size: ${({ theme }) => theme.typography.fontSizes.Title[3]};
    font-family: "Pretendard-Bold";
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BusinessVector = styled.img`
    width: 1.2vw;

    &:hover{
        cursor: pointer;
    }

`
