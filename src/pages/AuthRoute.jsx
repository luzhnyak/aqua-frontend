import { Navigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setToken } from '../redux/auth/slice';

export const AuthRoute = ({ redirectTo = '/' }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');

  dispatch(setToken(token));

  return <Navigate to={redirectTo} />;
};
