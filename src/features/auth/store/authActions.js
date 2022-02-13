import { appAuth } from '../../../firebase/appFirebase';
import {
  meetupAsyncError,
  meetupAsyncFinish,
  meetupAsyncStart,
} from '../../meetups/store/meetupActions';
import { LOGIN_USER, LOGOUT_USER } from './authConstants';

export function loginUser(credentials) {
  return async function (dispatch) {
    try {
      dispatch(meetupAsyncStart());
      const result = await appAuth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
      dispatch({ type: LOGIN_USER, payload: result.user });
    } catch (error) {
      dispatch(meetupAsyncError(error));
      throw error;
    } finally {
      dispatch(meetupAsyncFinish());
    }
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
