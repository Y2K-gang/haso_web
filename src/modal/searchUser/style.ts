import styled from "styled-components";
// 모달 스타일 수정 필요

export const ModalOverlay = styled.div`
  position: fixed;
  top: -155px;
  width: 700px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-height: 80%;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const UserItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const UserName = styled.span`
  font-size: 1rem;
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 20px;
  color: #888;
`;
