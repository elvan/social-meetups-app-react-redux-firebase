import {
  followUserInFirebase,
  unfollowUserInFirebase,
} from '../services/friendshipService';
import { updateUserProfileInFirebase } from '../services/userService';
import {
  LISTEN_TO_CURRENT_PROFILE,
  LISTEN_TO_SELECTED_PROFILE,
  LISTEN_TO_USER_FOLLOWERS,
  LISTEN_TO_USER_FOLLOWING,
  LISTEN_TO_USER_MEETUPS,
  LISTEN_TO_USER_PHOTOS,
  USER_ASYNC_ERROR,
  USER_ASYNC_FINISH,
  USER_ASYNC_START,
  USER_FRIENDSHIPS_ASYNC_ERROR,
  USER_FRIENDSHIPS_ASYNC_FINISH,
  USER_FRIENDSHIPS_ASYNC_START,
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

export function listenToUserFollowing(following) {
  return {
    type: LISTEN_TO_USER_FOLLOWING,
    payload: following,
  };
}

export function listenToUserFollowers(followers) {
  return {
    type: LISTEN_TO_USER_FOLLOWERS,
    payload: followers,
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

export function followUser(profile) {
  return async function (dispatch) {
    try {
      dispatch({ type: USER_FRIENDSHIPS_ASYNC_START });
      await followUserInFirebase(profile);
    } catch (error) {
      dispatch({ type: USER_FRIENDSHIPS_ASYNC_ERROR, payload: error });
      throw error;
    } finally {
      dispatch({ type: USER_FRIENDSHIPS_ASYNC_FINISH });
    }
  };
}

export function unfollowUser(profile) {
  return async function (dispatch) {
    try {
      dispatch({ type: USER_FRIENDSHIPS_ASYNC_START });
      await unfollowUserInFirebase(profile);
    } catch (error) {
      dispatch({ type: USER_FRIENDSHIPS_ASYNC_ERROR, payload: error });
      throw error;
    } finally {
      dispatch({ type: USER_FRIENDSHIPS_ASYNC_FINISH });
    }
  };
}
