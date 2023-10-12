import { useAuth } from '../../hooks/useAyth';
import { NavigationNavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationNavLink  to="/">
       Home
      </NavigationNavLink>
      {isLoggedIn && (
        <NavigationNavLink  to="/contacts">
         Contacts
        </NavigationNavLink>
      )}
    </nav>
  );
};
