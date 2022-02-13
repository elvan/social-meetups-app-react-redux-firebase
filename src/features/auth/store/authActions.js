import { appAuth } from '../../../firebase/appFirebase';
import { loginWithCredentialsToFirebase } from '../services/authServices';
import {
  AUTH_ASYNC_ERROR,
  AUTH_ASYNC_FINISH,
  AUTH_ASYNC_START,
  AUTH_LOGIN_USER,
  AUTH_LOGOUT_USER,
} from './authConstants';

export const authAsyncStart = () => {
  return {
    type: AUTH_ASYNC_START,
  };
};

export const authAsyncFinish = () => {
  return {
    type: AUTH_ASYNC_FINISH,
  };
};

export const authAsyncError = (error) => {
  return {
    type: AUTH_ASYNC_ERROR,
    payload: error,
  };
};

export function loginUser(user) {
  return {
    type: AUTH_LOGIN_USER,
    payload: user,
  };
}

export function logoutUser() {
  return {
    type: AUTH_LOGOUT_USER,
  };
}

export function loginWithCredentials(credentials) {
  return async function (dispatch) {
    try {
      dispatch(authAsyncStart());
      await loginWithCredentialsToFirebase(credentials);
    } catch (error) {
      dispatch(authAsyncError(error));
    } finally {
      dispatch(authAsyncFinish());
    }
  };
}

export function verifyAuth() {
  return async function (dispatch) {
    return appAuth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(loginUser(user));
      } else {
        dispatch({ type: AUTH_LOGOUT_USER });
      }
    });
  };
}
