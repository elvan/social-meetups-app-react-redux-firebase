import { updateUserProfileInFirebase } from '../services/userService';
import {
  LISTEN_TO_CURRENT_PROFILE,
  LISTEN_TO_SELECTED_PROFILE,
  LISTEN_TO_USER_MEETUPS,
  LISTEN_TO_USER_PHOTOS,
  USER_ASYNC_ERROR,
  USER_ASYNC_FINISH,
  USER_ASYNC_START,
} from './userConstants';

export function listenToCurrentProfile(profile) {
  return {
    type: LISTEN_TO_CURRENT_PROFILE,
    payload: profile,
  };
}

export function listenToSelectedProfile(profile) {
  return {
    type: LISTEN_TO_SELECTED_PROFILE,
    payload: profile,
  };
}

export function listenToUserPhotos(photos) {
  return {
    type: LISTEN_TO_USER_PHOTOS,
    payload: photos,
  };
}

export function listenToUserMeetups(meetups) {
  return {
    type: LISTEN_TO_USER_MEETUPS,
    payload: meetups,
  };
}

export function updateUserProfile(profile) {
  return async function (dispatch) {
    try {
      dispatch({ type: USER_ASYNC_START });
      return updateUserProfileInFirebase(profile);
    } catch (error) {
      dispatch({ type: USER_ASYNC_ERROR, payload: error });
      throw error;
    } finally {
      dispatch({ type: USER_ASYNC_FINISH });
    }
  };
}
