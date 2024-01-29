import { sendMailForgotPass } from 'services/waterApi';
import css from './ForgotPasswordPage.module.css';
import FormSendEmail from 'components/FormSendEmail/FormSendEmail';

const ForgotPasswordPage = () => {
  
  const handleSubmit = (values, { resetForm }) => {
    sendMailForgotPass(values);
    resetForm();
  };

  return (
    <div className={css.container}>
      <FormSendEmail title={"Forgot password"} onSubmit={handleSubmit}/>
    </div>
  );
};

export default ForgotPasswordPage;
