import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { socialLoginUser } from '../store/authActions';

export const SocialLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async () => {
    const result = await dispatch(socialLoginUser());
    console.debug('result', result);
    history.push('/meetups');
  };

  return (
    <div className="col-md-6 mx-auto">
      <button className="btn btn-outline-primary" onClick={handleLogin}>
        <div className="d-flex align-items-center justify-content-center">
          <FaGoogle className="mr-2" />
          Login with Google
        </div>
      </button>
    </div>
  );
};
