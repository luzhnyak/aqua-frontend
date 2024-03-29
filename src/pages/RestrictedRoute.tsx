import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { FC } from "react";
/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

interface IProps {
  component: any;
  redirectTo: string;
}

export const RestrictedRoute: FC<IProps> = ({
  component: Component,
  redirectTo = "/home",
}) => {
  const shouldRedirect = !!useSelector(selectIsLoggedIn);

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
