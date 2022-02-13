import { appAuth } from '../../../firebase/appFirebase';
import {
  loginWithCredentialsToFirebase,
  logoutFromFirebase,
  registerWithCredentialsToFirebase,
} from '../services/authServices';
import {
  AUTH_ASYNC_ERROR,
  AUTH_ASYNC_FINISH,
  AUTH_ASYNC_START,
  AUTH_IS_READY,
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

export function registerWithCredentials(credentials) {
  return async function (dispatch) {
    try {
      dispatch(authAsyncStart());
      const result = await registerWithCredentialsToFirebase(credentials);
      await result.user?.updateProfile({
        displayName: credentials.displayName,
      });
    } catch (error) {
      dispatch(authAsyncError(error));
      throw error;
    } finally {
      dispatch(authAsyncFinish());
    }
  };
}

export function loginWithCredentials(credentials) {
  return async function (dispatch) {
    try {
      dispatch(authAsyncStart());
      await loginWithCredentialsToFirebase(credentials);
    } catch (error) {
      dispatch(authAsyncError(error));
      throw error;
    } finally {
      dispatch(authAsyncFinish());
    }
  };
}

export function logoutUser() {
  return async function (dispatch) {
    try {
      dispatch(authAsyncStart());
      await logoutFromFirebase();
    } catch (error) {
      dispatch(authAsyncError(error));
      throw error;
    } finally {
      dispatch(authAsyncFinish());
    }
  };
}

export function verifyAuth() {
  return async function (dispatch) {
    return appAuth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({ type: AUTH_LOGIN_USER, payload: user });
      } else {
        dispatch({ type: AUTH_LOGOUT_USER });
      }

      dispatch({ type: AUTH_IS_READY });
    });
  };
}
