import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sendVerify } from 'services/waterApi';
import css from './RedirectVerifyPage.module.css'

const RedirectVerifyPage = () => {
  const { token } = useParams();


  useEffect(() => {
    if (token) {
      getRequest(token);
    }
  }, [token]);

  const getRequest = async token => {

    try {

      await sendVerify(token);
      return window.location.replace('/aqua-frontend/signin')

    } catch (error) {

      return window.location.replace('/aqua-frontend/signin')

    }
  };

  return (
    <div className={css.container}>
      <Loader />
    </div>
  );
};

export default RedirectVerifyPage;
