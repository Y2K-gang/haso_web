import styled from "styled-components";

export const ClientAll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ClientListTopArea = styled.div`
    margin-top: 3vh;
    padding-right: 2vw;
    width: 93vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 27px;
    font-weight: 600;
`;

export const WasteImg = styled.img`
    width: 2vw;
    &:hover{
        cursor: pointer;
    }
`;