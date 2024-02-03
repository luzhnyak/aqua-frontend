import React from 'react';

import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as IconUser } from '../../images/icons/user.svg';

const UserAuth = () => {
  return (
    <>
      <Link to="/signin" className={css.signIn}>
        <p className={css.signInText}>Sign in</p>
        <IconUser className={css.IconUser} />
      </Link>
    </>
  );
};

export default UserAuth;
