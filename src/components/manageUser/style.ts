import styled from "styled-components";

export const ManageUserBack = styled.div`
    width: 90vw;
    height: 13vh;
    border-radius: 10px;
    background-color: #E8E8E8;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4vh;

    &:hover{
        background-color: #D1D1D1;
        cursor: pointer;
    }

`
export const ManageUserContents = styled.div`
    width: 83vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ManageUserContentsArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
`

export const ManageUserArea = styled(ManageUserContentsArea)`
    width: 11vw;
`;