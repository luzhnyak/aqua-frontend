import React from 'react';
import css from './Setting.module.css';

import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
import { ReactComponent as IconUploadPhoto } from '../../images/icons/arrow-up-tray.svg';
import RadioButtons from './RadioButtons';
import FormUser from './FormUser';

const SettingModal = () => {
  const user = useSelector(selectUser);
  //   const userName = user.name;
  //   const email = user.email;
  const avatar = user.avatarURL;
  const userName = 'kate';
  // const userName = '';
  const email = 'email@mail.com';

  return (
    <div>
      <h4 className={css.titleContentEight}>Your photo</h4>
      <div className={css.wrapAvatar}>
        {avatar ? (
          <img srcSet={avatar} className={css.avatar} alt="userAvatar" />
        ) : (
          <div className={css.noAvatar}>
            <span className={css.letter}>
              {userName
                ? userName.charAt(0).toUpperCase()
                : email.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <Link className={css.uploadPhoto}>
          <IconUploadPhoto className={css.iconUploadPhoto} />
          <p>Upload a photo</p>
        </Link>
      </div>
      <h4 className={css.titleContentTwelve}>Your gender identity</h4>

      <RadioButtons />
      <FormUser />
    </div>
  );
};

export default SettingModal;
