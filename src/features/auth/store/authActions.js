import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../async/asyncActions';
import { appAuth } from '../../../firebase/appFirebase';
import { dataFromSnapshot } from '../../../firebase/dataFromSnapshot';
import {
  getUserProfileInFirebase,
  setUserProfileInFirebase,
} from '../../users/services/userService';
import { listenToCurrentProfile } from '../../users/store/userActions';
import {
  loginUserToFirebase,
  logoutUserFromFirebase,
  registerUserToFirebase,
  socialLoginUserWithFirebase,
  updatePasswordInFirebase,
} from '../services/authServices';
import {
  AUTH_IS_READY,
  AUTH_LOGIN_USER,
  AUTH_LOGOUT_USER,
} from './authConstants';

export function verifyAuth() {
  return async function (dispatch) {
    return appAuth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({ type: AUTH_LOGIN_USER, payload: user });
        const profileRef = getUserProfileInFirebase(user.uid);
        profileRef.onSnapshot((snapshot) => {
          dispatch(listenToCurrentProfile(dataFromSnapshot(snapshot)));
          dispatch({ type: AUTH_IS_READY });
        });
      } else {
        dispatch({ type: AUTH_LOGOUT_USER });
        dispatch({ type: AUTH_IS_READY });
      }
    });
  };
}

export function socialLoginUser() {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      const result = await socialLoginUserWithFirebase();
      if (result.additionalUserInfo?.isNewUser) {
        await setUserProfileInFirebase(result.user);
      }
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}

export function registerUser(credentials) {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      const result = await registerUserToFirebase(credentials);
      await result.user?.updateProfile({
        displayName: credentials.displayName,
      });
      await setUserProfileInFirebase(result.user);
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}

export function loginUser(credentials) {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      await loginUserToFirebase(credentials);
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
      await logoutUserFromFirebase();
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
