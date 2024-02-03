import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAyth';
import { ButtonUserName, UserName, Wrapper } from './UserMenu.styled';
import { MdLogout } from 'react-icons/md';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName >  Welcome, {user.name}</UserName>
      <ButtonUserName type="button" onClick={() => dispatch(logOut())}>
        <MdLogout/>
      </ButtonUserName>
    </Wrapper>
  );
};
