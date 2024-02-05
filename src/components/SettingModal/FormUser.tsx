import { FC, useState } from "react";
import css from "./FormUser.module.css";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ReactComponent as OpenEyeIcon } from "../../images/icons/eye-slash.svg";
import { ReactComponent as ClosedEyeIcon } from "../../images/icons/eye.svg";
import RadioButtons from "./RadioButtons";
import { selectUser } from "../../redux/auth/selectors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";
import { updateUserInfo } from "../../services/waterApi";
import { useTranslation } from "react-i18next";

interface IProps {
  onClose: () => void;
}

const FormUser: FC<IProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const user = useSelector(selectUser);
  const { name, email, gender } = user;

  const [showOutdatedPassword, setShowOutdatedPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().max(32, `${t("authorization.errors.enterLess")}`),
    email: Yup.string(),
    password: Yup.string()
      .min(8, `${t("authorization.errors.passwordLeast")}`)
      .max(64, `${t("authorization.errors.passwordLess")}`),
    newPassword: Yup.string()
      .min(8, `${t("authorization.errors.passwordLeast")}`)
      .max(64, `${t("authorization.errors.passwordLess")}`),
    repeatPassword: Yup.string()
      .min(8, `${t("authorization.errors.passwordLeast")}`)
      .max(64, `${t("authorization.errors.passwordLess")}`),
  });

  const initialValues = {
    gender: gender,
    name: name || "",
    email: email,
    password: "",
    newPassword: "",
    repeatPassword: "",
  };

  const onSubmit = async (values: any, { resetForm }: any) => {
    setLoader(true);
    const { gender, email, name, password, newPassword, repeatPassword } =
      values;
    if (email === "") {
      setLoader(false);
      return toast.error(`${t("formUser.notification.email")}`);
    }

    if (password === "" && newPassword === "" && repeatPassword === "") {
      try {
        if (email !== "") {
          await updateUserInfo({ gender, email, name });
          toast.success(`${t("formUser.notification.success")}`);

          setLoader(false);
          resetForm({
            password,
            newPassword,
          });
          onClose();
        }
      } catch (error) {
        setLoader(false);
        return toast.error(`${t("formUser.notification.anotherEmail")}`);
      }
    } else if (password !== "" && newPassword !== "" && repeatPassword !== "") {
      if (newPassword !== repeatPassword) {
        return toast.error(`${t("formUser.notification.differ")}`);
      }

      setLoader(true);

      try {
        await updateUserInfo({
          gender,
          email,
          name,
          password,
          newPassword,
        });

        toast.success(`${t("formUser.notification.update")}`);

        setLoader(false);

        resetForm({
          password,
          newPassword,
        });
        onClose();
      } catch (error: any) {
        setLoader(false);
        if (error.response && error.response.status === 409) {
          toast.error(`${t("formUser.notification.anotherEmail")}`);
          setLoader(false);
        }
        if (error.response && error.response.status === 400) {
          toast.error(`${t("formUser.notification.wrong")}`);
          setLoader(false);
        }
      }
    } else {
      setLoader(false);
      if (
        password !== "" &&
        newPassword === "" &&
        (repeatPassword !== "" || repeatPassword === "")
      ) {
        return toast.error(`${t("formUser.notification.newPass")}`);
      }

      if (password !== "" && newPassword !== "" && repeatPassword === "") {
        return toast.error(`${t("formUser.notification.repeatPass")}`);
      }

      if (password === "" && newPassword !== "" && repeatPassword !== "") {
        setLoader(false);
        return toast.error(`${t("formUser.notification.currentPass")}`);
      }
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={css.form}>
              <div className={css.userDataForm}>
                <RadioButtons />

                <div className={css.formName}>
                  <label className={css.title} htmlFor="name">
                    {t("formUser.name")}
                  </label>
                  <Field
                    id="name"
                    className={`${css.input}  ${
                      errors.name && touched.name ? css.errorinput : ""
                    }`}
                    name="name"
                    type="text"
                    placeholder={t("formUser.nameText")}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.errormessage}
                  />
                </div>

                <div className={css.formEmail}>
                  <label className={css.title} htmlFor="email">
                    {t("formUser.email")}
                  </label>
                  <Field
                    id="email"
                    className={`${css.input}  ${
                      errors.email && touched.email ? css.errorinput : ""
                    }`}
                    name="email"
                    type="email"
                    placeholder="user@mail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.errormessage}
                  />
                </div>
              </div>

              <div className={css.wrapPassword}>
                <div className={css.formPassword}>
                  <h4 className={css.titlePassword}>
                    {t("formUser.passwordText")}
                  </h4>

                  <label className={css.subTitle} htmlFor="password">
                    {t("formUser.outdatedPassword")}:
                  </label>
                  <div className={css.subform}>
                    <Field
                      id="password"
                      className={`${css.input}  ${
                        errors.password && touched.password
                          ? css.errorinput
                          : ""
                      }`}
                      name="password"
                      type={showOutdatedPassword ? "text" : "password"}
                      placeholder={t("formUser.passwordText")}
                    />
                    <div
                      onClick={() =>
                        setShowOutdatedPassword(!showOutdatedPassword)
                      }
                    >
                      {showOutdatedPassword ? (
                        <ClosedEyeIcon className={css.iconeye} />
                      ) : (
                        <OpenEyeIcon className={css.iconeye} />
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={css.errormessage}
                  />
                </div>

                <div className={css.formPassword}>
                  <label className={css.subTitle} htmlFor="newPassword">
                    {t("formUser.newPassword")}:
                  </label>
                  <div className={css.subform}>
                    <Field
                      id="newPassword"
                      className={`${css.input}  ${
                        errors.newPassword && touched.newPassword
                          ? css.errorinput
                          : ""
                      }`}
                      name="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder={t("formUser.passwordText")}
                    />
                    <div onClick={() => setShowNewPassword(!showNewPassword)}>
                      {showNewPassword ? (
                        <ClosedEyeIcon className={css.iconeye} />
                      ) : (
                        <OpenEyeIcon className={css.iconeye} />
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className={css.errormessage}
                  />
                </div>

                <div className={css.formPassword}>
                  <label className={css.subTitle} htmlFor="repeatPassword">
                    {t("formUser.repeatPassword")}:
                  </label>
                  <div className={css.subform}>
                    <Field
                      id="repeatPassword"
                      className={`${css.input}  ${
                        errors.repeatPassword && touched.repeatPassword
                          ? css.errorinput
                          : ""
                      }`}
                      name="repeatPassword"
                      type={showRepeatPassword ? "text" : "password"}
                      placeholder={t("formUser.passwordText")}
                    />
                    <div
                      onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                    >
                      {showRepeatPassword ? (
                        <ClosedEyeIcon className={css.iconeye} />
                      ) : (
                        <OpenEyeIcon className={css.iconeye} />
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="repeatPassword"
                    component="div"
                    className={css.errormessage}
                  />
                </div>
              </div>
            </div>

            <button className={css.button} type="submit">
              {t("formUser.save")}
            </button>
          </Form>
        )}
      </Formik>
      {loader && <Loader />}
    </div>
  );
};

export default FormUser;
