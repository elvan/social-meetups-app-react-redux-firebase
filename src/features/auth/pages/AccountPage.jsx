import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import { FaSave, FaSignInAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MyTextInput } from '../../../components/form/MyTextInput';
import { Loading } from '../../../components/loading/Loading';
import { loginUser, updatePassword } from '../store/authActions';

export const AccountPage = () => {
  const { loading, error, currentUser } = useSelector(
    (state) => state.authState
  );

  const [showModal, setShowModal] = useState(false);
  const [unmounted, setUnmounted] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setUnmounted(false);
    return () => {
      setUnmounted(true);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    toast.error(error.message);
    return;
  }

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              auth: null, // to store the error message
              email: '',
              password: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
              password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            })}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              if (!unmounted) {
                setSubmitting(true);
                await dispatch(loginUser(values));
                setSubmitting(false);
                setShowModal(false);
                toast.success('You are logged out successfully');
              }
            }}
          >
            {({ errors, isSubmitting }) => (
              <Form className='mb-4'>
                {errors.auth && (
                  <div className='alert alert-danger' role='alert'>
                    {errors.auth}
                  </div>
                )}

                <MyTextInput name='email' label='Email' />
                <MyTextInput name='password' label='Password' type='password' />

                <Button
                  disabled={isSubmitting}
                  type='submit'
                  block
                  className='shadow'
                >
                  <div className='d-flex align-items-center justify-content-center'>
                    {isSubmitting ? (
                      <>
                        <Spinner
                          animation='border'
                          size='sm'
                          className='mr-2'
                        />
                        Logging in...
                      </>
                    ) : (
                      <>
                        <FaSignInAlt size={15} className='mr-2' />
                        Login
                      </>
                    )}
                  </div>
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

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
                onSubmit={async (
                  values,
                  { resetForm, setSubmitting, setErrors }
                ) => {
                  try {
                    setSubmitting(true);
                    await dispatch(updatePassword(values));
                    resetForm();
                    toast.success('Password updated successfully');
                  } catch (error) {
                    console.log(error);
                    if (error.code === 'auth/requires-recent-login') {
                      setShowModal(true);
                    }
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
    </>
  );
};
