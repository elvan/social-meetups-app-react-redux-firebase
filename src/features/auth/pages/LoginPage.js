import { Link } from 'react-router-dom';
import { LoginForm } from '../forms/LoginForm';

export const LoginPage = () => {
  return (
    <div className='col-6 mx-auto'>
      <h3>Login to SocialMeetups</h3>
      <hr />
      <LoginForm />
      <hr />
      <div className='text-center'>
        <p>Don't have an account?</p>
        <Link to='/register' role='button'>
          Register here
        </Link>
      </div>
    </div>
  );
};
