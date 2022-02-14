import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../async/asyncActions';
import { appAuth } from '../../../firebase/appFirebase';
import { setUserProfileData } from '../../users/services/userService';
import {
  loginWithCredentialsToFirebase,
  logoutFromFirebase,
  registerWithCredentialsToFirebase,
  socialLoginWithGoogle,
  updatePasswordInFirebase,
} from '../services/authServices';
import {
  AUTH_IS_READY,
  AUTH_LOGIN_USER,
  AUTH_LOGOUT_USER,
} from './authConstants';

export function registerWithCredentials(credentials) {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      const result = await registerWithCredentialsToFirebase(credentials);
      await result.user?.updateProfile({
        displayName: credentials.displayName,
      });
      await setUserProfileData(result.user);
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}

export function loginWithCredentials(credentials) {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      await loginWithCredentialsToFirebase(credentials);
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}

export function socialLoginUser() {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      const result = await socialLoginWithGoogle();
      if (result.additionalUserInfo?.isNewUser) {
        await setUserProfileData(result.user);
      }
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}

export function logoutUser() {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      await logoutFromFirebase();
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}

export function updatePassword(credentials) {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      await updatePasswordInFirebase(credentials);
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
    } finally {
      dispatch(asyncActionFinish());
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
