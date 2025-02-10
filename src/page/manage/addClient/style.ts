import styled from "styled-components";

export const AddClientAll = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 798px;
`;
export const AddClientContentsArea = styled.div`
  margin-top: 79.8px;
  width: 808.5px;
`;
export const SearchUser = styled.div`
  width: 808.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 31.92px;
`;

export const ClientInfo = styled.div`
  width: 808.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 31.92px;
  margin-top: 103.74px;
`;
export const ClientInfos = styled.div`
  width: 808.5px;
  height: 159.6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  gap: 73.5px;
`;
export const ClientInfoGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39.9px;
`;
export const ClientInfoOne = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 51.45px;
  align-items: flex-end;
`;
export const InfoTitles = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.heading[1]};
  font-family: "Pretendard-Bold";
`;
export const InfoContents = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
  font-family: "Pretendard-Medium";
`;

// UserList 스타일 (검색창 바로 아래에 표시될 목록)
export const UserList = styled.ul`
  width: 808.5px;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 231.92px;
`;

export const UserItem = styled.li`
  padding: 14.7px;
  font-size: ${({ theme }) => theme.typography.fontSizes.body[1]};
  font-family: "Pretendard-Medium";
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #bfd7ff;
  border-right: 1px solid #bfd7ff;
  border-left: 1px solid #bfd7ff;
  &:last-child {
    border-bottom: 1px solid #bfd7ff;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    cursor: pointer;
  }
`;

export const UserName = styled.span`
  font-weight: 600;
`;
