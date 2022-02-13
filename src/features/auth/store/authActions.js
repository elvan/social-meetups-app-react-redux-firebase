import { appAuth } from '../../../firebase/appFirebase';
import {
  AUTH_ASYNC_ERROR,
  AUTH_ASYNC_FINISH,
  AUTH_ASYNC_START,
  LOGIN_USER,
  LOGOUT_USER,
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
    type: LOGIN_USER,
    payload: user,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function verifyAuth() {
  return async function (dispatch) {
    return appAuth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(loginUser(user));
      } else {
        dispatch({ type: LOGOUT_USER });
      }
    });
  };
}
