import React from 'react';
import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { ReactComponent as Iconlogo } from '../../images/logo.svg';

const Logo = () => {
  const autorized = useSelector(selectIsLoggedIn);

  return (
    <Link to={autorized ? '/' : '/home'} className={css.logoContainer}>
      {/* !autorized */}
      <Iconlogo />
      <p className={css.logoText}>Tracker of water</p>
    </Link>
  );
};

export default Logo;
