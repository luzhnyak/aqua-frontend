import React, { useState } from 'react';
import css from './FormUser.module.css';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfoThunk } from '../../redux/auth/operations';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ReactComponent as OpenEyeIcon } from 'images/icons/eye-slash.svg';
import { ReactComponent as ClosedEyeIcon } from 'images/icons/eye.svg';
import RadioButtons from './RadioButtons';
// import { ReactComponent as IconRadioButton } from '../../images/icons/radio-button.svg';
// import { ReactComponent as IconRadioButtonCircle } from '../../images/icons/radio-button-circle.svg';
import { selectUser } from '../../redux/auth/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormUser = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { name, email, gender } = user;

  const [showOutdatedPassword, setShowOutdatedPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().max(32, 'Enter no more than 32 characters.'),
    email: Yup.string(),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters.')
      .max(64, 'Enter no more than 64 characters.'),
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters.')
      .max(64, 'Enter no more than 64 characters.'),
    repeatPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters.')
      .max(64, 'Enter no more than 64 characters.'),
  });

  const initialValues = {
    gender: gender,
    name: name || '',
    email: email || '',
    password: '',
    newPassword: '',
    repeatPassword: '',
  };

  const onSubmit = (values, { resetForm }) => {
    if (values.newPassword !== values.repeatPassword) {
      return toast.error('Your passwords are difference');
    }

    if (values.password !== '') {
      dispatch(
        updateUserInfoThunk({
          gender: values.gender,
          name: values.name,
          email: values.email,
          password: values.password,
          newPassword: values.newPassword,
        })
      );

      toast.success('You successfully change your data and password');
    }

    if (values.password === '') {
      dispatch(
        updateUserInfoThunk({
          gender: values.gender,
          name: values.name,
          email: values.email,
        })
      );

      toast.success('You successfully change your data');
    }

    resetForm({ password: values.password, newPassword: values.newPassword });

    onClose();
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
                    Your name
                  </label>
                  <Field
                    id="name"
                    className={`${css.input}  ${
                      errors.name && touched.name ? css.errorinput : ''
                    }`}
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.errormessage}
                  />
                </div>

                <div className={css.formEmail}>
                  <label className={css.title} htmlFor="email">
                    E-mail
                  </label>
                  <Field
                    id="email"
                    className={`${css.input}  ${
                      errors.email && touched.email ? css.errorinput : ''
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
                  <h4 className={css.titlePassword}>Password</h4>

                  <label className={css.subTitle} htmlFor="password">
                    Outdated password:
                  </label>
                  <div className={css.subform}>
                    <Field
                      id="password"
                      className={`${css.input}  ${
                        errors.outdatedPassword && touched.outdatedPassword
                          ? css.errorinput
                          : ''
                      }`}
                      name="password"
                      type={showOutdatedPassword ? 'text' : 'password'}
                      placeholder="Password"
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
                    New Password:
                  </label>
                  <div className={css.subform}>
                    <Field
                      id="newPassword"
                      className={`${css.input}  ${
                        errors.newPassword && touched.newPassword
                          ? css.errorinput
                          : ''
                      }`}
                      name="newPassword"
                      type={showNewPassword ? 'text' : 'password'}
                      placeholder="Password"
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
                    Repeat new password:
                  </label>
                  <div className={css.subform}>
                    <Field
                      id="repeatPassword"
                      className={`${css.input}  ${
                        errors.repeatPassword && touched.repeatPassword
                          ? css.errorinput
                          : ''
                      }`}
                      name="repeatPassword"
                      type={showRepeatPassword ? 'text' : 'password'}
                      placeholder="Password"
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
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormUser;
