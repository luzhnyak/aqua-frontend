import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { ReactComponent as OpenEyeIcon } from 'images/icons/eye-slash.svg';
import { ReactComponent as ClosedEyeIcon } from 'images/icons/eye.svg';
import { useParams } from 'react-router-dom';
import { sendUpdatePass } from 'services/waterApi';
import css from './UpdatePasswordPage.module.css';

const UpdatetPasswordPage = () => {
  const { token } = useParams();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false);

  const initialValues = {
    newPassword: '',
    repeatNewPassword: '',
  };

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required('Password is required.')
      .min(7, 'Password must be at least 8 characters.')
      .max(55, 'Password must be less than 55 characters.'),
    repeatNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Repeat password is required.'),
  });

  const onSubmit = async (values, { resetForm }) => {
    const { newPassword, repeatNewPassword } = values;

    if (newPassword !== repeatNewPassword) {
      return;
    }

    await sendUpdatePass(token, repeatNewPassword);

    resetForm();
  };

  return (
    <div className={css.container}>
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
                    Enter your password
                  </label>
                  <div
                    className={`${css.inputBox} ${
                      errors.newPassword && touched.newPassword ? css.errorBorder : ''
                    }`}
                  >
                    <Field
                      id="update-password-id1"
                      className={`${css.inputpassword}  ${
                        errors.newPassword && touched.newPassword
                          ? css.errorInput
                          : ''
                      }`}
                      name="newPassword"
                      type={showNewPassword ? 'text' : 'password'}
                      placeholder="Enter new password"
                    />
                    <div
                      className={css.iconeye}
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      style={{
                        cursor: 'pointer',
                        marginTop: 'auto',
                        marginBottom: 'auto',
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
                    Enter your password
                  </label>
                  <div
                    className={`${css.inputBox} ${
                      errors.repeatNewPassword && touched.repeatNewPassword ? css.errorBorder : ''
                    }`}
                  >
                    <Field
                      id="update-password-id2"
                      className={`${css.inputpassword}  ${
                        errors.repeatNewPassword && touched.repeatNewPassword
                          ? css.errorInput
                          : ''
                      }`}
                      name="repeatNewPassword"
                      type={showRepeatNewPassword ? 'text' : 'password'}
                      placeholder="Enter repeat new password"
                    />
                    <div
                      className={css.iconeye}
                      onClick={() => setShowRepeatNewPassword(!showRepeatNewPassword)}
                      style={{
                        cursor: 'pointer',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                      }}
                    >
                      {showRepeatNewPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
                    </div>
                  </div>
                  <ErrorMessage
                    name="repeatNewPassword"
                    component="div"
                    className={css.errormessage}
                  />
                </div>
                <button type="submit" className={css.button}>Send</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdatetPasswordPage;
