import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import css from './Header.module.css';
import { ReactComponent as IconChevron } from '../../images/icons/chevron-double-up.svg';
import UserLogoModal from './UserLogoModal';
import avatar from './Ellipse 1.jpg';

const UserLogo = () => {
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
    </>
  );
};

export default UserLogo;
