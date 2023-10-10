// import { NavLink } from 'react-router-dom';
import { DecorationNavLink } from './AuthNav.styled';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <DecorationNavLink  to="/register">
        Register
      </DecorationNavLink>
      <DecorationNavLink  to="/login">
        Log In
      </DecorationNavLink>
    </div>
  );
};
