import React from "react";

import css from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as IconUser } from "../../images/icons/user.svg";
import { useTranslation } from "react-i18next";

const UserAuth: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Link to="/signin" className={css.signIn}>
        <p className={css.signInText}>{t("authorization.login")}</p>
        <IconUser className={css.IconUser} />
      </Link>
      <div className={css.lngBtns}>
        <button
          className={`${css.lngBtn} ${
            i18n.language === "en" ? `${css.active}` : ""
          }`}
          type="button"
          onClick={() => changeLanguage("en")}
        >
          en
        </button>
        <button
          className={`${css.lngBtn} ${
            i18n.language === "ua" ? `${css.active}` : ""
          }`}
          type="button"
          onClick={() => changeLanguage("ua")}
        >
          укр
        </button>
      </div>
    </>
  );
};

export default UserAuth;
