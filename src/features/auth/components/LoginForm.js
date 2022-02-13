import { Form, Formik } from 'formik';
import { Button, Spinner } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MyTextInput } from '../../../components/form/MyTextInput';
import { loginWithCredentials } from '../store/authActions';

export const LoginForm = () => {
  const initialValues = {
    auth: null, // to store the error message
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

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    try {
      await dispatch(loginWithCredentials(values));
      setSubmitting(false);
      history.push('/meetups');
      toast.success('You are logged in successfully');
    } catch (error) {
      setErrors({ auth: error.message });
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
