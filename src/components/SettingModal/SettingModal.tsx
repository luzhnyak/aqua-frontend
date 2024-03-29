import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import css from "./Setting.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { ReactComponent as IconUploadPhoto } from "../../images/icons/arrow-up-tray.svg";
import FormUser from "./FormUser";
import { updateAvatarThunk } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";

interface IProps {
  onClose: () => void;
}

const SettingModal: FC<IProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>();

  const dispatch: AppDispatch = useDispatch();

  const user = useSelector(selectUser);
  const { name, email, avatarURL } = user;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selected = files[0];
      setFile(selected);
    }
  };

  useEffect(() => {
    if (file) {
      dispatch(updateAvatarThunk(file));

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [file, dispatch]);

  return (
    <div className={css.container}>
      <h4 className={css.title}>{t("settingModal.photo")}</h4>
      <div className={css.wrapAvatar}>
        {avatarURL ? (
          <div className={css.cover}>
            <img src={avatarURL} className={css.avatar} alt="userAvatar" />
          </div>
        ) : (
          <div className={css.noAvatar}>
            <span className={css.letter}>
              {name
                ? name.charAt(0).toUpperCase()
                : email?.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        <form>
          <input
            id="inputFile"
            type="file"
            onChange={handleChange}
            className={css.input}
            ref={fileInputRef}
          />
          <label htmlFor="inputFile" className={css.uploadPhoto}>
            <IconUploadPhoto className={css.iconUploadPhoto} />
            {t("settingModal.upload")}
          </label>
        </form>
      </div>

      <FormUser onClose={onClose} />
    </div>
  );
};

export default SettingModal;
