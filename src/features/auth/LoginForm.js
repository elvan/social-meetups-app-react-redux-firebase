import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';
import * as Yup from 'yup';
import { MyTextInput } from '../../components/form/MyTextInput';

export const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

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
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ dirty, touched, isSubmitting, isValid }) => (
        <Form className='mb-4'>
          <MyTextInput name='email' label='Email' />
          <MyTextInput name='password' label='Password' type='password' />

          <Button type='submit' block className='shadow'>
            <FaSignInAlt size={18} className='mr-2' />
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
