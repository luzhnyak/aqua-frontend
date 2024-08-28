import React, { FC, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { ReactComponent as OpenEyeIcon } from "../../images/icons/eye-slash.svg";
import { ReactComponent as ClosedEyeIcon } from "../../images/icons/eye.svg";
import { ReactComponent as GoogleIcon } from "../../images/icons/google-icon.svg";
import css from "./AuthForm.module.css";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";

export type SubmitValues = {
  repeatPassword?: string | undefined;
  email: string;
  password: string;
  language: string;
};

interface IProps {
  formTitle: string;
  onSubmit: (
    values: SubmitValues,
    formikHelpers: FormikHelpers<SubmitValues>
  ) => void | Promise<any>;
}

const AuthForm: FC<IProps> = ({ formTitle, onSubmit }) => {
  const { t, i18n } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);

  const initialValues: SubmitValues = {
    email: "",
    password: "",
    ...(formTitle === `${t("authorization.register")}` && {
      repeatPassword: "",
    }),
    language: i18n.language,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(`${t("authorization.errors.validEmail")}`)
      .required(`${t("authorization.errors.emailReq")}`),
    password: Yup.string()
      .required(`${t("authorization.errors.passwordReq")}`)
      .min(8, `${t("authorization.errors.passwordLeast")}`)
      .max(64, `${t("authorization.errors.passwordLess")}`),
    ...(formTitle === `${t("authorization.register")}` && {
      repeatPassword: Yup.string()
        .oneOf(
          [Yup.ref("password"), undefined],
          `${t("authorization.errors.passwordMatch")}`
        )
        .required(`${t("authorization.errors.repeatPasswordReq")}`),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <h1 className={css.formTitle}>{formTitle}</h1>
          <div className={css.formControl}>
            <div className={css.stack}>
              <label className={css.formLabel} htmlFor="unique-id1">
                {t("authorization.email")}
              </label>
              <Field
                id="unique-id1"
                className={`${css.input} ${
                  errors.email && touched.email ? css.errorBorder : ""
                } ${errors.email && touched.email ? css.errorInput : ""}`}
                name="email"
                type="email"
                placeholder={t("authorization.emailText")}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errormessage}
              />
            </div>

            <div className={css.stack}>
              <label className={css.formLabel} htmlFor="unique-id2">
                {t("authorization.password")}
              </label>
              <div
                className={`${css.inputBox} ${
                  errors.password && touched.password ? css.errorBorder : ""
                }`}
              >
                <Field
                  id="unique-id2"
                  className={`${css.inputpassword}  ${
                    errors.password && touched.password ? css.errorInput : ""
                  }`}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t("authorization.passwordText")}
                />
                <div
                  className={css.iconeye}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    cursor: "pointer",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  {showPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
                </div>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className={css.errormessage}
              />
            </div>

            {formTitle === `${t("authorization.register")}` && (
              <div className={css.stack}>
                <label className={css.formLabel} htmlFor="unique-id3">
                  {t("authorization.repeat")}
                </label>
                <div
                  className={`${css.inputBoxRep} ${
                    errors.repeatPassword && touched.repeatPassword
                      ? css.errorBorder
                      : ""
                  }`}
                >
                  <Field
                    id="unique-id3"
                    className={`${css.inputpassword}  ${
                      errors.repeatPassword && touched.repeatPassword
                        ? css.errorInput
                        : ""
                    }`}
                    name="repeatPassword"
                    type={showRepPassword ? "text" : "password"}
                    placeholder={t("authorization.repeatText")}
                  />
                  <div
                    className={css.iconeye}
                    onClick={() => setShowRepPassword(!showRepPassword)}
                    style={{
                      cursor: "pointer",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {showRepPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
                  </div>
                </div>
                <ErrorMessage
                  name="repeatPassword"
                  component="div"
                  className={css.errormessage}
                />
              </div>
            )}

            <button className={css.button} type="submit">
              {formTitle === `${t("authorization.login")}`
                ? `${t("authorization.login")}`
                : `${t("authorization.register")}`}
            </button>

            <a
              href={`${process.env.REACT_APP_API_URL}/auth/google`}
              className={css.googleLogin}
            >
              <GoogleIcon className={css.googleIcon} />
              <p className={css.googleText}>
                {t("authorization.enterWithGoogle")}
              </p>
            </a>

            <div className={css.wraplink}>
              {formTitle === `${t("authorization.login")}` ? (
                <>
                  <Link to="/signup" className={css.signup}>
                    <p className={css.signupText}>
                      {t("authorization.register")}
                    </p>
                  </Link>
                  <Link to="/forgot-password" className={css.forgotPassword}>
                    <p className={css.signupText}>
                      {t("authorization.forgot")}?
                    </p>
                  </Link>
                </>
              ) : (
                <Link to="/signin" className={css.signin}>
                  <p className={css.signinText}>{t("authorization.login")}</p>
                </Link>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
