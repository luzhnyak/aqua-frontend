import React from "react";
import css from "./Header.module.css";
import Logo from "./Logo";
import UserAuth from "./UserAuth";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserLogo from "./UserLogo";

const Header = () => {
  const autorized = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          <Logo />
          {!autorized ? <UserAuth /> : <UserLogo />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
