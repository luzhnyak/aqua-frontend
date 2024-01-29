import React from 'react';
import css from './Setting.module.css';

import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
import { ReactComponent as IconUploadPhoto } from '../../images/icons/arrow-up-tray.svg';
import FormUser from './FormUser';
// import { updateAvatarThunk } from '../../redux/auth/operations';

const SettingModal = ({ onClose }) => {
  // const [file, setFile] = useState();

  // const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const { name, email, avatarURL } = user.user;

  const handleSubmit = event => {
    event.preventDefault();
    // dispatch(updateAvatarThunk(file));
  };

  // const handleChange = event => {
  //   setFile(event.target.files[0]);
  // };

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
        <Link className={css.uploadPhoto}>
          <IconUploadPhoto className={css.iconUploadPhoto} />
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              // onChange={handleChange}
            />
            {/* Upload a photo</input> */}
          </form>
        </Link>
      </div>

      <FormUser onClose={onClose} />
    </div>
  );
};

export default SettingModal;
