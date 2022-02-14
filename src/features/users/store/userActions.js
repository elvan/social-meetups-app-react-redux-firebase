import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart
} from '../../../async/asyncActions';
import { updateUserProfileInFirebase } from '../services/userService';
import {
  LISTEN_TO_SELECTED_PROFILE,
  LISTEN_TO_USER_PROFILE
} from './userConstants';

export function listenToUserProfile(profile) {
  return {
    type: LISTEN_TO_USER_PROFILE,
    payload: profile,
  };
}

export function listenToSelectedProfile(profile) {
  return {
    type: LISTEN_TO_SELECTED_PROFILE,
    payload: profile,
  };
}

export function updateUserProfile(profile) {
  return async function (dispatch) {
    try {
      dispatch(asyncActionStart());
      await updateUserProfileInFirebase(profile);
    } catch (error) {
      dispatch(asyncActionError(error));
      throw error;
    } finally {
      dispatch(asyncActionFinish());
    }
  };
}
