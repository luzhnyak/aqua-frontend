import React, { useRef, useState } from 'react';
import css from './Setting.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { ReactComponent as IconUploadPhoto } from '../../images/icons/arrow-up-tray.svg';
import FormUser from './FormUser';
import { updateAvatarThunk } from '../../redux/auth/operations';

const SettingModal = ({ onClose }) => {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const { name, email, avatarURL } = user;

  const handleSubmit = event => {
    event.preventDefault();
    if (file) {
      dispatch(updateAvatarThunk(file));
      // Скидання значень інпуту
      fileInputRef.current.value = null;
    }
  };

  const handleChange = event => {
    setFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    // Викликаємо клік на прихованому інпуті, коли натискана кнопка
    fileInputRef.current.click();
  };

  return (
    <div>
      <h4 className={css.title}>Your photo</h4>
      <div className={css.wrapAvatar}>
        {avatarURL ? (
          <img srcSet={avatarURL} className={css.avatar} alt="userAvatar" />
        ) : (
          <div className={css.noAvatar}>
            <span className={css.letter}>
              {name
                ? name.charAt(0).toUpperCase()
                : email.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={handleChange}
            className={css.input}
            ref={fileInputRef}
          />

          <button className={css.uploadPhoto} onClick={handleButtonClick}>
            <IconUploadPhoto className={css.iconUploadPhoto} />
            Upload a photo
          </button>
        </form>
      </div>

      <FormUser onClose={onClose} />
    </div>
  );
};

export default SettingModal;
