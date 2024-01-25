import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(selectToken);
  return token ? children : <Navigate to="/login" />;
};
