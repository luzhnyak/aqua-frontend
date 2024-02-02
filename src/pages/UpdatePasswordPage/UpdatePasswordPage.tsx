
import { useParams } from 'react-router-dom';
import { sendUpdatePass } from '../../services/waterApi';
import css from './UpdatePasswordPage.module.css';
import { toast } from 'react-toastify';
import Backdrop from '../../components/Backdrop/Backdrop';
import Loader from '../../components/Loader/Loader';
import { useState } from 'react';
import UpdatetPassword from '../../components/UpdatePassword/UpdatePassword';
import { FormikHelpers } from 'formik'

interface Values {
  newPassword: string,
  repeatNewPassword: string,
} 

const UpdatetPasswordPage = () => {
  const { token } = useParams();
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (values: Values, { resetForm }: FormikHelpers<Values>) => {
    const { newPassword, repeatNewPassword } = values;
    

    if (newPassword !== repeatNewPassword) {
      return;
    }
    setLoader(true)
    try {
      if(!token) return
      await sendUpdatePass(token, {newPassword: repeatNewPassword});
      toast.success("Password changed successfully")

      setTimeout(()=> {
        return window.location.replace('/aqua-frontend/signin');
      }, 3000)

    } catch (error) {
      setLoader(false)
      toast.error("Something went wrong, try again later")
      
    } finally {
      setLoader(false)
    }

    resetForm();
  };

  return (
    <div className={css.container}>
      <UpdatetPassword onSubmit={handleSubmit}/>
      {loader && 
       <Backdrop>
         <Loader />
       </Backdrop>}
    </div>
  );
};

export default UpdatetPasswordPage;
