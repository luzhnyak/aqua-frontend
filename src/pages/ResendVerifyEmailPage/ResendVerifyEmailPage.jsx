import FormSendEmail from 'components/FormSendEmail/FormSendEmail';
import css from './ResendVerifyEmailPage.module.css'
import { resendVerifyToken } from 'services/waterApi';

const ResendVerifyEmailPage = () => {
  
  const handleSubmit = (values, { resetForm }) => {
    resendVerifyToken(values)
    resetForm();
  };

  return (
    <div className={css.container}>
      <FormSendEmail title={"Resend verify email"} onSubmit={handleSubmit}/>
    </div>
  );
};

export default ResendVerifyEmailPage;