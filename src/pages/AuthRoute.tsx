import { Navigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FC } from "react";
import { setToken } from "../redux/auth/slice";

interface IProps {
  redirectTo: string;
}

export const AuthRoute: FC<IProps> = ({ redirectTo = "/" }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  dispatch(setToken(token));

  return <Navigate to={redirectTo} />;
};
