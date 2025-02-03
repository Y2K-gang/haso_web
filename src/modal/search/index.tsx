import React from 'react';
import * as S from './style';

const SearchModal = ({ users }) => {
  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalHeader>
        </S.ModalHeader>
        <S.UserList>
          {users.length > 0 ? (
            users.map((user) => (
              <S.UserItem key={user.id}>
                <S.UserName>{user.name}</S.UserName>
              </S.UserItem>
            ))
          ) : (
            <S.NoResults>검색 결과가 없습니다.</S.NoResults>
          )}
        </S.UserList>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default SearchModal;
