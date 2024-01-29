import FormSendEmail from 'components/FormSendEmail/FormSendEmail';
import css from './ResendVerifyEmailPage.module.css'
import { resendVerifyToken } from 'services/waterApi';
import { toast } from 'react-toastify';

const ResendVerifyEmailPage = () => {
  
  const handleSubmit = async (values, { resetForm }) => {

    try {
      
      await resendVerifyToken(values)
      toast.success("The operation was successful, check your email")

      setTimeout(()=> {
        return window.location.replace('/aqua-frontend/signin');
      }, 3000)

    } catch (error) {

      toast.error("Something went wrong, try again")
      
    }

    resetForm();
  };

  return (
    <div className={css.container}>
      <FormSendEmail title={"Resend verify email"} onSubmit={handleSubmit}/>
    </div>
  );
};

export default ResendVerifyEmailPage;