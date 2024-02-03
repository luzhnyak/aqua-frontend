import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import Backdrop from 'components/Backdrop/Backdrop';
import { loginThunk } from '../../redux/auth/operations';
import AuthForm from '../../components/AuthForm/AuthForm';
import css from './SigninPage.module.css';

const SignInPage = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const signInHandler = (values, { resetForm }) => {
    setLoader(true);
    try {
      dispatch(loginThunk(values));
      resetForm();
    } catch (error) {
      setLoader(false);
      toast.error('Sign in is failed. Please try again.');
    } finally {
      setLoader(false);
    }
  };

  return (
    <section>
      <div className={css.MainContainer}>
        <div className={css.mainstr}>
          <AuthForm formTitle="Sign In" onSubmit={signInHandler} />
          {loader && (
            <Backdrop>
              <Loader />
            </Backdrop>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
