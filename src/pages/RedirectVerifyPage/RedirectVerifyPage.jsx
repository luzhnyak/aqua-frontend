import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sendVerify } from 'services/waterApi';
import css from './RedirectVerifyPage.module.css';
import { toast } from 'react-toastify';
import Backdrop from 'components/Backdrop/Backdrop';

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
      return window.location.replace('/aqua-frontend/signin');
    } catch (error) {
      toast.error('Something went wrong, try again');
      setTimeout(() => {
        return window.location.replace('/aqua-frontend/resend-verify-email');
      }, 3000);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.mainstr}>
        <Backdrop>
          <Loader />
        </Backdrop>
      </div>
    </div>
  );
};

export default RedirectVerifyPage;
