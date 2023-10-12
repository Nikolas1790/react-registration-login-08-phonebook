import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAyth';
import { UserName, Wrapper } from './UserMenu.styled';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName >  Welcome, {user.name}</UserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
