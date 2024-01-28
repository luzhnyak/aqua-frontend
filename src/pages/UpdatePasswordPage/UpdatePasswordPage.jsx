import { ErrorMessage, Field, Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import { ReactComponent as OpenEyeIcon } from 'images/icons/eye-slash.svg';
import { ReactComponent as ClosedEyeIcon } from 'images/icons/eye.svg';
import { useParams } from "react-router-dom";
import { sendUpdatePass } from "services/waterApi";

const UpdatetPasswordPage = () => {
  const { token } = useParams();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false);

  const initialValues = {
    newPassword: '',
    repeatNewPassword: '',
  };

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required('Password is required.')
      .min(7, 'Password must be at least 8 characters.')
      .max(55, 'Password must be less than 55 characters.'),
      repeatNewPassword: Yup.string()
      .required('Password is required.')
      .min(7, 'Password must be at least 8 characters.')
      .max(55, 'Password must be less than 55 characters.'),
  });


  const onSubmit = async (values, { resetForm }) => {
    const {newPassword, repeatNewPassword} = values
    
    if(newPassword !== repeatNewPassword) {
      return
    }
    console.log(repeatNewPassword)
    console.log(token)

    await sendUpdatePass(token, repeatNewPassword)


    resetForm();
  };

    return (
      <div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <h1>Update password</h1>
              <div>

                <div >
                  <label htmlFor="update-password-id1">
                    Enter new your password
                  </label>
                  <div>
                    <Field
                      id="update-password-id1"
                
                      name="newPassword"
                      type={showNewPassword ? 'text' : 'password'}
                      placeholder="Enter new password"
                    />
                    <div
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      style={{
                        cursor: 'pointer',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                      }}
                    >
                      {showNewPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                  />
                </div>

                <div >
                  <label htmlFor="update-password-id2">
                    Enter new your password
                  </label>
                  <div>
                    <Field
                      id="update-password-id2"
                      name="repeatNewPassword"
                      type={showRepeatNewPassword ? 'text' : 'password'}
                      placeholder="Repeat new password"
                    />
                    <div
                      onClick={() => setShowRepeatNewPassword(!showRepeatNewPassword)}
                      style={{
                        cursor: 'pointer',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                      }}
                    >
                      {showRepeatNewPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                  />
                </div>

                <button type="submit">
                  Update password
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    );
  };
  
  export default UpdatetPasswordPage;