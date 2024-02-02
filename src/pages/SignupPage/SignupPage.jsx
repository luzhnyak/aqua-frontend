import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import Backdrop from 'components/Backdrop/Backdrop';

import AuthForm from '../../components/AuthForm/AuthForm';
import { signUpThunk } from '../../redux/auth/operations';
import css from './SignupPage.module.css';

const SignupPage = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const signUpHandler = (values, { resetForm }) => {
    const { repeatPassword, ...newObject } = values;
    setLoader(true);
    try {
      dispatch(signUpThunk(newObject));
      // toast.success('Registration successful! Please sign in.');
      resetForm();
      setRedirect(true);
    } catch (error) {
      setLoader(false);
      toast.error('Registration is failed. Please try again.');
    } finally {
      setLoader(false);
    }
  };

  if (redirect) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className={css.container}>
      <div className={css.mainstr}>
        <div className={css.hidden}></div>
        <AuthForm formTitle="Sign Up" onSubmit={signUpHandler} />
        {loader && (
          <Backdrop>
            <Loader />
          </Backdrop>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
