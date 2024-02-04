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
};

interface IProps {
  formTitle: string;
  onSubmit: (
    values: SubmitValues,
    formikHelpers: FormikHelpers<SubmitValues>
  ) => void | Promise<any>;
}

const AuthForm: FC<IProps> = ({ formTitle, onSubmit }) => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);

  const initialValues: SubmitValues = {
    email: "",
    password: "",
    ...(formTitle === `${t("signIn.register")}` && { repeatPassword: "" }),
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters.")
      .max(64, "Password must be less than 64 characters."),
    ...(formTitle === `${t("signIn.register")}` && {
      repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Repeat password is required."),
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
                {t("signIn.email")}
              </label>
              <Field
                id="unique-id1"
                className={`${css.input} ${
                  errors.email && touched.email ? css.errorBorder : ""
                } ${errors.email && touched.email ? css.errorInput : ""}`}
                name="email"
                type="email"
                placeholder={t("signIn.emailText")}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errormessage}
              />
            </div>

            <div className={css.stack}>
              <label className={css.formLabel} htmlFor="unique-id2">
                {t("signIn.password")}
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
                  placeholder={t("signIn.passwordText")}
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

            {formTitle === `${t("signIn.register")}` && (
              <div className={css.stack}>
                <label className={css.formLabel} htmlFor="unique-id3">
                  {t("signIn.repeat")}
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
                    placeholder={t("signIn.repeatText")}
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
              {formTitle === `${t("signIn.login")}`
                ? `${t("signIn.login")}`
                : `${t("signIn.register")}`}
            </button>

            <a
              href="https://aqua-backend-ieu7.onrender.com/auth/google"
              className={css.googleLogin}
            >
              <GoogleIcon className={css.googleIcon} />
              <p className={css.googleText}>{t("signIn.enterWithGoogle")}</p>
            </a>

            <div className={css.wraplink}>
              {formTitle === `${t("signIn.login")}` ? (
                <>
                  <Link to="/signup" className={css.signup}>
                    <p className={css.signupText}>{t("signIn.register")}</p>
                  </Link>
                  <Link to="/forgot-password" className={css.forgotPassword}>
                    <p className={css.signupText}>{t("signIn.forgot")}?</p>
                  </Link>
                </>
              ) : (
                <Link to="/signin" className={css.signin}>
                  <p className={css.signinText}>{t("signIn.login")}</p>
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
