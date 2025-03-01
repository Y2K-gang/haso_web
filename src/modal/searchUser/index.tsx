import * as S from './style';

type SearchModalProps = {
  users: { id: number; name: string }[];
  onSelectUser: (name: string) => void;
  onClose: () => void; // 모달 닫기 함수 추가
};

const SearchModal = ({ users, onSelectUser, onClose }: SearchModalProps) => {
  const handleModalClick = (e: React.MouseEvent) => {
    // 배경을 클릭했을 때 모달 닫기
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.ModalContainer onClick={handleModalClick}>
      <S.UserList>
        {users.length > 0 ? (
          users.map((user) => (
            <S.UserItem key={user.id} onClick={() => onSelectUser(user.name)}>
              <S.UserName>{user.name}</S.UserName>
            </S.UserItem>
          ))
        ) : (
          <S.NoResults>검색 결과가 없습니다.</S.NoResults>
        )}
      </S.UserList>
    </S.ModalContainer>
  );
};

export default SearchModal;
