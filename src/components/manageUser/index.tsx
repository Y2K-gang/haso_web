import * as S from './style';
import profileImg from '@/assets/image/profile.svg';

const ManageUser = ({ user, onClick }) => {
  return (
    <S.ManageUserBack onClick={onClick}>
      <S.ManageUserContents>
        <S.ManageUserArea>
          <img src={profileImg} alt="프로필" />
          <span>{user.name} 님</span>
        </S.ManageUserArea>
        <S.ManageUserContentsArea>
          <span>{user.category}</span>
        </S.ManageUserContentsArea>
      </S.ManageUserContents>
    </S.ManageUserBack>
  );
};

export default ManageUser;
