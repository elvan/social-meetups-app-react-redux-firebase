import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { SocialLogin } from '../components/SocialLogin';

export const LoginPage = () => {
  return (
    <div className='col-6 mx-auto'>
      <h3>Login to SocialMeetups</h3>
      <hr />
      <LoginForm />
      <hr />
      <div className='text-center'>
        <span className='mr-2'>Don't have an account?</span>
        <Link to='/register' role='button'>
          Register here
        </Link>
      </div>
      <hr />
      <SocialLogin />
    </div>
  );
};
