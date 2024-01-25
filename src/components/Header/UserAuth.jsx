import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import avatar from './Ellipse 1.jpg';
import css from './Header.module.css';
import { Link } from 'react-router-dom';
// import { ReactComponent as IconUser } from '../../images/icons/user.svg';
import { ReactComponent as IconChevron } from '../../images/icons/chevron-double-up.svg';
import UserLogoModal from './UserLogoModal';

const UserAuth = () => {
  const autorized = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // const user = useSelector(selectUser);
  // const userName = user.name;
  // const email = user.email;
  const userName = 'kate';
  // const userName = '';
  const email = 'email@mail.com';

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* {!autorized ? (
            <Link to="/signin" className={css.signIn}>
              <p className={css.signInText}>Sign in</p>
              <IconUser className={css.IconUser} />
            </Link>
          ) : ( */}
      <Link className={css.dropDownMenu} onClick={toggleMenu}>
        <p className={css.userNameText}>{userName ? userName : ''}</p>
        {avatar ? (
          <img srcSet={avatar} className={css.avatar} alt="userAvatar" />
        ) : (
          <div className={css.noAvatar}>
            <span>
              {userName
                ? userName.charAt(0).toUpperCase()
                : email.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <IconChevron className={css.IconChevron} />
      </Link>

      {isMenuOpen && <UserLogoModal />}

      {/* )} */}
    </>
  );
};

export default UserAuth;
