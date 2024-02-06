import React, { FC } from "react";
import css from "./RadioButtons.module.css";

import { ErrorMessage, Field } from "formik";
import { useTranslation } from "react-i18next";

const RadioButtons: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4 className={css.title}>{t("radioButtons.title")}</h4>
      <div className={css.radioButtons}>
        <label>
          <Field
            type="radio"
            name="gender"
            value="female"
            className={css.radiobutton}
          />

          <span className={css.labelName}>{t("radioButtons.woman")}</span>
        </label>
        <label>
          <Field
            type="radio"
            name="gender"
            value="male"
            className={css.radiobutton}
          />

          <span className={css.labelName}>{t("radioButtons.man")}</span>
        </label>
        <ErrorMessage name="gender" component="div" />
      </div>
    </div>
  );
};

export default RadioButtons;
