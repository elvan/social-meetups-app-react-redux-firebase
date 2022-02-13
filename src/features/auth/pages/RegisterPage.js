import { Link } from 'react-router-dom';
import { RegisterForm } from '../forms/RegisterForm';

export const RegisterPage = () => {
  return (
    <div className='col-6 mx-auto'>
      <h3>Create New Account</h3>
      <hr />
      <RegisterForm />
      <hr />
      <div className='text-center'>
        <p>Already have an account?</p>
        <Link to='/login' role='button'>
          Login here
        </Link>
      </div>
    </div>
  );
};
