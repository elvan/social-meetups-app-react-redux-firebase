import { Form, Formik } from 'formik';
import { Button, Spinner } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { MyTextInput } from '../../components/form/MyTextInput';
import { loginUser } from './store/authActions';

export const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const history = useHistory();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(loginUser(values));
        setTimeout(() => {
          setSubmitting(false);
          history.push('/meetups');
        }, 1000);
      }}
    >
      {({ dirty, touched, isSubmitting, isValid }) => (
        <Form className='mb-4'>
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
                  <Spinner animation='border' size='sm' className='mr-2' />
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
  );
};
