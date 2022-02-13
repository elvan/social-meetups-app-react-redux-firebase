import { Link } from 'react-router-dom';
import { SocialLogin } from '../components/SocialLogin';
import { RegisterForm } from '../forms/RegisterForm';

export const RegisterPage = () => {
  return (
    <div className='col-6 mx-auto'>
      <h3>Create New Account</h3>
      <hr />
      <RegisterForm />
      <hr />
      <div className='text-center'>
        <span className='mr-2'>Already have an account?</span>
        <Link to='/login' role='button'>
          Login here
        </Link>
      </div>
      <hr />
      <SocialLogin />
    </div>
  );
};
