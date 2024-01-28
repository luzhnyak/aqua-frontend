import { ErrorMessage, Field, Formik, Form, } from 'formik';
import { Link } from 'react-router-dom';
import { sendMailForgotPass } from 'services/waterApi';
import * as Yup from 'yup';

const ForgotPasswordPage = () => {

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email is required.'),
  });

  const onSubmit = (values, { resetForm }) => {
    sendMailForgotPass(values)
    resetForm();
  };

    return (
      <div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <h1 >Forgot password</h1>
              <div>
                <div>
                  <label htmlFor="forgot-pass-id1">
                    Enter your email
                  </label>
                  <Field
                    id="forgot-pass-id1"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                  />
                </div>
                <button type="submit">
                  Send
                </button>
                <Link to="/signin">
                  <p>Sign in</p>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    );
  };
  
  export default ForgotPasswordPage;