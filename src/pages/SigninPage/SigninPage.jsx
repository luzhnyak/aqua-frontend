import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ReactComponent as OpenEyeIcon } from 'images/icons/eye-slash.svg';
import { ReactComponent as ClosedEyeIcon } from 'images/icons/eye.svg';
import { loginThunk } from '../../redux/auth/operations';
import css from './SigninPage.module.css';

const SigninPage = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email is required.'),
    password: Yup.string()
      .required('Password is required.')
      .min(7, 'Password must be at least 8 characters.')
      .max(55, 'Password must be less than 55 characters.'),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(loginThunk(values));
    resetForm();
  };

  return (
    <div className={css.container}>
      <div className={css.mainstr}>
        <div className={css.hidden}></div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className={css.form}>
              <h1 className={css.formTitle}>Sign In</h1>
              <div className={css.formControl}>
                <div className={css.stack}>
                  <label className={css.formLabel} htmlFor="unique-id1">
                    Enter your email
                  </label>
                  <Field
                    id="unique-id1"
                    className={`${css.input} ${
                      errors.email && touched.email ? css.errorBorder : ''
                    } ${errors.email && touched.email ? css.errorInput : ''}`}
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

                <div className={css.stack}>
                  <label className={css.formLabel} htmlFor="unique-id2">
                    Enter your password
                  </label>
                  <div
                    className={`${css.inputBox} ${
                      errors.password && touched.password ? css.errorBorder : ''
                    }`}
                  >
                    <Field
                      id="unique-id2"
                      className={`${css.inputpassword}  ${
                        errors.password && touched.password
                          ? css.errorInput
                          : ''
                      }`}
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                    />
                    <div
                      className={css.iconeye}
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        cursor: 'pointer',
                        marginTop: 'auto',
                        marginBottom: 'auto',
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

                <button className={css.button} type="submit">
                  Sign In
                </button>
              </div>
              <Link to="/signup" className={css.signup}>
                <p className={css.signupText}>Sign up</p>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SigninPage;
