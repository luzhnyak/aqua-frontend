import { sendMailForgotPass } from 'services/waterApi';
import css from './ForgotPasswordPage.module.css';
import FormSendEmail from 'components/FormSendEmail/FormSendEmail';
import { toast } from 'react-toastify';

const ForgotPasswordPage = () => {
  
  const handleSubmit = (values, { resetForm }) => {
    try {

      sendMailForgotPass(values);
      toast.success("The operation was successful, check your email")

    } catch (error) {

      toast.error("Something went wrong, try again")
      
    }
    
    resetForm();
  };

  return (
    <div className={css.container}>
      <FormSendEmail title={"Forgot password"} onSubmit={handleSubmit}/>
    </div>
  );
};

export default ForgotPasswordPage;
