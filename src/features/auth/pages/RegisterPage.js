import { Link } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import { SocialLogin } from '../components/SocialLogin';

export const RegisterPage = () => {
  return (
    <div className='col-6 mx-auto'>
      <div className='shadow rounded bg-white p-3 mb-3'>
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
    </div>
  );
};
