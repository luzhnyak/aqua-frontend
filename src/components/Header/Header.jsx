import React from 'react';
import css from './Header.module.css';

import { ReactComponent as Logo } from '../../images/logo.svg';
// import { ReactComponent as IconUser } from '../../images/icons/user.svg';
import { ReactComponent as IconChevron } from '../../images/icons/chevron-double-up.svg';
import avatar from './Ellipse 1.jpg';

import { Link } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';

const Navigation = () => {
  return (
    <header>
      <div className={css.container}>
        <nav className={css.nav}>
          <Link
            to={!autorized ? '/' : <HomePage />}
            className={css.logoContainer}
          >
            <Logo />
            <p className={css.logoText}>Tracker of water</p>
          </Link>
          {/* <Link to="/signin" className={css.signIn}>
            <p className={css.signInText}>Sign in</p>
            <IconUser className={css.IconUser} />
          </Link> */}
          <Link className={css.userMenu}>
            <p className={css.userNameText}>Name</p> {/* приходить з бека*/}
            <img srcSet={avatar} className={css.avatar} alt="userAvatar" />
            {/* приходить з бека*/}
            <IconChevron className={css.IconChevron} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
