import { NavLink } from 'react-router-dom';
import { DecorationNavLink } from './AuthNav.styled';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <DecorationNavLink  to="/register">
        Register
      </DecorationNavLink>
      <NavLink  to="/login">
        Log In
      </NavLink>
    </div>
  );
};
