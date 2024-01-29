import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import css from './Header.module.css';
import { ReactComponent as IconChevron } from '../../images/icons/chevron-double-up.svg';
import UserLogoModal from './UserLogoModal';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const UserLogo = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const user = useSelector(selectUser);
  const { name, email, avatarURL } = user;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        setMenuOpen(false);
      }
    };

    // const handleOutsideClick = event => {
    //   if () {
    //     setMenuOpen(false);
    //   }
    // };

    window.addEventListener('keydown', handleKeyDown);
    // window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // window.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen, setMenuOpen]);

  return (
    <>
      {user && (
        <Link className={css.dropDownMenu} onClick={toggleMenu}>
          <p className={css.userNameText}>{name ? name : ''}</p>
          {avatarURL ? (
            <img srcSet={avatarURL} className={css.avatar} alt="userAvatar" />
          ) : (
            <div className={css.noAvatar}>
              <span>
                {name
                  ? name.charAt(0).toUpperCase()
                  : email.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <IconChevron className={css.IconChevron} />
        </Link>
      )}
      {isMenuOpen && <UserLogoModal onClose={onCloseMenu} />}
    </>
  );
};

export default UserLogo;
