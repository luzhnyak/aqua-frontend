import React from 'react';
import css from './Header.module.css';
import Logo from './Logo';
import UserAuth from './UserAuth';

const Header = () => {
  return (
    <header>
      <nav className={css.nav}>
        <Logo />
        <UserAuth />
      </nav>
    </header>
  );
};

export default Header;
