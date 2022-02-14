import { Form, Formik } from 'formik';
import { Button, Spinner } from 'react-bootstrap';
import { FaSave } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { MyTextInput } from '../../../components/form/MyTextInput';
import { updatePassword } from '../store/authActions';

export const AccountPage = () => {
  // @ts-ignore
  const { currentUser } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  return (
    <div className='col-6 mx-auto'>
      <div className='shadow rounded bg-white p-3 mb-3'>
        <h3>Account</h3>
        <hr />
        {currentUser?.providerId === 'password' && (
          <div>
            <p>Use this form to change your password.</p>
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
                  .oneOf(
                    [Yup.ref('newPassword1'), null],
                    'Passwords must match'
                  )
                  .required('Password confirmation is required'),
              })}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                try {
                  setSubmitting(true);
                  await dispatch(updatePassword(values));
                } catch (error) {
                  setErrors({ auth: error.message });
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ dirty, errors, isSubmitting, isValid }) => (
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
                        <Spinner
                          animation='border'
                          size='sm'
                          className='mr-2'
                        />
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
        )}

        {currentUser?.providerId === 'google.com' && (
          <div>
            <h4>Google Account</h4>
            <p>Please visit Google to update your account</p>
            <a
              href='https://google.com'
              target='_blank'
              rel='noreferrer'
              className='btn btn-outline-primary'
            >
              Go to Google
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
