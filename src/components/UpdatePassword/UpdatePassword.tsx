import { ErrorMessage, Field, Formik, Form, FormikHelpers } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { ReactComponent as OpenEyeIcon } from "../../images/icons/eye-slash.svg";
import { ReactComponent as ClosedEyeIcon } from "../../images/icons/eye.svg";
import css from "./UpdatePasswordComponent.module.css";
import { useTranslation } from "react-i18next";

interface Values {
  newPassword: string;
  repeatNewPassword: string;
}

interface IProps {
  onSubmit: (values: Values, { resetForm }: FormikHelpers<Values>) => void;
}

const UpdatetPassword: React.FC<IProps> = ({ onSubmit }) => {
  const { t } = useTranslation();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false);

  const initialValues = {
    newPassword: "",
    repeatNewPassword: "",
  };

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required("Password is required.")
      .min(7, "Password must be at least 8 characters.")
      .max(55, "Password must be less than 55 characters."),
    repeatNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Repeat password is required."),
  });

  return (
    <div className={css.mainstr}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <h1 className={css.formTitle}>Update password</h1>
            <div className={css.formControl}>
              <div className={css.stack}>
                <label className={css.formLabel} htmlFor="update-password-id1">
                  {t("signIn.enterNewPass")}
                </label>
                <div
                  className={`${css.inputBox} ${
                    errors.newPassword && touched.newPassword
                      ? css.errorBorder
                      : ""
                  }`}
                >
                  <Field
                    id="update-password-id1"
                    className={`${css.inputpassword}  ${
                      errors.newPassword && touched.newPassword
                        ? css.errorInput
                        : ""
                    }`}
                    name="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    placeholder={t("signIn.enterNewPassText")}
                  />
                  <div
                    className={css.iconeye}
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    style={{
                      cursor: "pointer",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {showNewPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
                  </div>
                </div>
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className={css.errormessage}
                />
              </div>
              <div className={css.stack}>
                <label className={css.formLabel} htmlFor="update-password-id2">
                  {t("signIn.repeatNewPass")}
                </label>
                <div
                  className={`${css.inputBox} ${
                    errors.repeatNewPassword && touched.repeatNewPassword
                      ? css.errorBorder
                      : ""
                  }`}
                >
                  <Field
                    id="update-password-id2"
                    className={`${css.inputpassword}  ${
                      errors.repeatNewPassword && touched.repeatNewPassword
                        ? css.errorInput
                        : ""
                    }`}
                    name="repeatNewPassword"
                    type={showRepeatNewPassword ? "text" : "password"}
                    placeholder={t("signIn.repeatNewPassText")}
                  />
                  <div
                    className={css.iconeye}
                    onClick={() =>
                      setShowRepeatNewPassword(!showRepeatNewPassword)
                    }
                    style={{
                      cursor: "pointer",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {showRepeatNewPassword ? (
                      <ClosedEyeIcon />
                    ) : (
                      <OpenEyeIcon />
                    )}
                  </div>
                </div>
                <ErrorMessage
                  name="repeatNewPassword"
                  component="div"
                  className={css.errormessage}
                />
              </div>
              <button type="submit" className={css.button}>
                {t("signIn.send")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdatetPassword;
