import FormSendEmail from 'components/FormSendEmail/FormSendEmail';
import css from './ResendVerifyEmailPage.module.css'
import { resendVerifyToken } from 'services/waterApi';
import { toast } from 'react-toastify';
import Backdrop from 'components/Backdrop/Backdrop';
import Loader from 'components/Loader/Loader';
import { useState } from 'react';

const ResendVerifyEmailPage = () => {
  const [loader, setLoader] = useState(false);
  
  const handleSubmit = async (values, { resetForm }) => {
    setLoader(true)
    try {
      
      await resendVerifyToken(values)
      toast.success("The operation was successful, check your email")

      setTimeout(()=> {
        return window.location.replace('/aqua-frontend/signin');
      }, 3000)

    } catch (error) {
      setLoader(false)
      toast.error("Something went wrong, try again")
      
    } finally {
      setLoader(false)
    }

    resetForm();
  };

  return (
    <div className={css.container}>
      <FormSendEmail title={"Resend verify email"} onSubmit={handleSubmit}/>
      {loader && 
       <Backdrop>
         <Loader />
       </Backdrop>}
    </div>
  );
};

export default ResendVerifyEmailPage;