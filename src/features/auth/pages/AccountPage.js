import { Form, Formik } from 'formik';
import { Button, Spinner } from 'react-bootstrap';
import { FaSave } from 'react-icons/fa';
import * as Yup from 'yup';
import { MyTextInput } from '../../../components/form/MyTextInput';

export const AccountPage = () => {
  return (
    <div className='col-6 mx-auto'>
      <h3>Account</h3>
      <hr />
      <div>
        <p>Use this page to change your password.</p>
        <Formik
          initialValues={{
            auth: null,
            newPassword1: '',
            newPassword2: '',
          }}
          validationSchema={Yup.object().shape({
            newPassword1: Yup.string()
              .min(8, 'Password must be at least 8 characters long')
              .required('Password is required'),
            newPassword2: Yup.string()
              .oneOf([Yup.ref('newPassword1'), null], 'Passwords must match')
              .required('Password confirmation is required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ isSubmitting, errors, isValid, dirty }) => (
            <Form>
              {errors.auth && (
                <div className='alert alert-danger' role='alert'>
                  {errors.auth}
                </div>
              )}

              <MyTextInput
                name='newPassword1'
                type='password'
                label='New Password'
                disabled={isSubmitting}
              />
              <MyTextInput
                name='newPassword2'
                type='password'
                label='Confirm Password'
                disabled={isSubmitting}
              />
              <Button
                type='submit'
                disabled={isSubmitting || !isValid || !dirty}
              >
                {isSubmitting ? (
                  <>
                    <Spinner animation='border' size='sm' className='mr-2' />
                    Updating...
                  </>
                ) : (
                  <>
                    <FaSave size={15} className='mr-2' />
                    Update Password
                  </>
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <div>
        <h4>Google Account</h4>
        <p>Please visit Google to update your account</p>
        <a
          href='https://google.com'
          target='_blank'
          className='btn btn-outline-primary'
        >
          Go to Google
        </a>
      </div>
    </div>
  );
};
