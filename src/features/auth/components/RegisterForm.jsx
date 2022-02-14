import { Form, Formik } from 'formik';
import { Button, Spinner } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MyTextInput } from '../../../components/form/MyTextInput';
import { registerWithCredentials } from '../store/authActions';

export const RegisterForm = () => {
  const initialValues = {
    auth: null, // to store the error message
    displayName: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const validationSchema = Yup.object({
    displayName: Yup.string()
      .min(2, 'Display name must be at least 2 characters')
      .required('Display name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    try {
      await dispatch(registerWithCredentials(values));
      history.push('/meetups');
      setSubmitting(false);
      toast.success('Account created successfully');
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

          <MyTextInput name='displayName' label='Display Name' />
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
                  Registering...
                </>
              ) : (
                <>
                  <FaUserPlus size={15} className='mr-2' />
                  Register
                </>
              )}
            </div>
          </Button>
        </Form>
      )}
    </Formik>
  );
};
