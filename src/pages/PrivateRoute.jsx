import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/signin',
}) => {
  const shouldRedirect = !useSelector(selectIsLoggedIn);

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
