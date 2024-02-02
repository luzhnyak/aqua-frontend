import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { FC } from "react";
/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

interface IProps {
  component: any;
  redirectTo: string;
}

export const PrivateRoute: FC<IProps> = ({
  component: Component,
  redirectTo = "/signin",
}) => {
  const shouldRedirect = !useSelector(selectIsLoggedIn);

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
