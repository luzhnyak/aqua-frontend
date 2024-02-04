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
      .required(`${t("authorization.errors.passwordReq")}`)
      .min(8, `${t("authorization.errors.passwordLeast")}`)
      .max(64, `${t("authorization.errors.passwordLess")}`),
    repeatNewPassword: Yup.string()
      .oneOf(
        [Yup.ref("newPassword")],
        `${t("authorization.errors.passwordMatch")}`
      )
      .required(`${t("authorization.errors.repeatPasswordReq")}`),
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
                  {t("authorization.enterNewPass")}
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
                    placeholder={t("authorization.enterNewPassText")}
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
                  {t("authorization.repeatNewPass")}
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
                    placeholder={t("authorization.repeatNewPassText")}
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
                {t("authorization.send")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdatetPassword;
