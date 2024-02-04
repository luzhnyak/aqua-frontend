import { ErrorMessage, Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";
import css from "./FormSendEmail.module.css";
import * as Yup from "yup";

const FormSendEmail = ({ title, onSubmit }) => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email is required."),
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
                  Enter your email
                </label>
                <Field
                  id="forgot-pass-id1"
                  className={`${css.input} ${
                    errors.email && touched.email ? css.errorBorder : ""
                  } ${errors.email && touched.email ? css.errorInput : ""}`}
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.errormessage}
                />
              </div>
              <button type="submit" className={css.button}>
                Send
              </button>
              <Link to="/signin" className={css.signin}>
                <p>Sign in</p>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSendEmail;
