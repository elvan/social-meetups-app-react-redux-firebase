import { FaGoogle } from 'react-icons/fa';

export const SocialLogin = () => {
  return (
    <div className='col-6 mx-auto'>
      <button className='btn btn-outline-primary'>
        <div className='d-flex align-items-center justify-content-center'>
          <FaGoogle className='mr-2' />
          Login with Google
        </div>
      </button>
    </div>
  );
};
