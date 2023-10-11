import { DecorationNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <DecorationNavLink  to="/register">
      ✏️ Register
      </DecorationNavLink>
      <DecorationNavLink  to="/login">
      ☕️ Log In
      </DecorationNavLink>
    </div>
  );
};
