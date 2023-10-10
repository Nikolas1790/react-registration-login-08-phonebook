import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAyth';
import { NavigationNavLink } from './Navigation.styled';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationNavLink  to="/">
        Home
      </NavigationNavLink>
      {isLoggedIn && (
        <NavigationNavLink  to="/tasks">
          Tasks
        </NavigationNavLink>
      )}
    </nav>
  );
};
