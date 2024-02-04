import { ErrorMessage, Field, Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import css from "./FormSendEmail.module.css";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

interface Values {
  email: string;
}

interface IProps {
  title: string;
  onSubmit: (values: Values, { resetForm }: FormikHelpers<Values>) => void;
}

const FormSendEmail: React.FC<IProps> = ({ title, onSubmit }) => {
  const { t } = useTranslation();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .required(`${t("authorization.errors.emailReq")}`),
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
            <h1 className={css.formTitle}>{title}</h1>
            <div className={css.formControl}>
              <div className={css.stack}>
                <label htmlFor="forgot-pass-id1" className={css.formLabel}>
                  {t("authorization.email")}
                </label>
                <Field
                  id="forgot-pass-id1"
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
              <button type="submit" className={css.button}>
                {t("authorization.send")}
              </button>
              <Link to="/signin" className={css.signin}>
                <p>{t("authorization.login")}</p>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSendEmail;
