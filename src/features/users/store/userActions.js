import {
  followUserInFirebase,
  unfollowUserInFirebase,
} from '../services/friendService';
import { updateUserProfileInFirebase } from '../services/userService';
import {
  LISTEN_TO_CURRENT_PROFILE,
  LISTEN_TO_SELECTED_PROFILE,
  LISTEN_TO_USER_FOLLOWERS,
  LISTEN_TO_USER_FOLLOWING,
  LISTEN_TO_USER_MEETUPS,
  LISTEN_TO_USER_PHOTOS,
  SET_FOLLOW_USER,
  SET_UNFOLLOW_USER,
  USER_ASYNC_ERROR,
  USER_ASYNC_FINISH,
  USER_ASYNC_START,
  USER_FRIENDS_ASYNC_ERROR,
  USER_FRIENDS_ASYNC_FINISH,
  USER_FRIENDS_ASYNC_START,
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
      dispatch({ type: USER_FRIENDS_ASYNC_START });
      await followUserInFirebase(profile);
      dispatch({ type: SET_FOLLOW_USER, payload: profile });
    } catch (error) {
      dispatch({ type: USER_FRIENDS_ASYNC_ERROR, payload: error });
      throw error;
    } finally {
      dispatch({ type: USER_FRIENDS_ASYNC_FINISH });
    }
  };
}

export function unfollowUser(profile) {
  return async function (dispatch) {
    try {
      dispatch({ type: USER_FRIENDS_ASYNC_START });
      await unfollowUserInFirebase(profile);
      dispatch({ type: SET_UNFOLLOW_USER, payload: profile });
    } catch (error) {
      dispatch({ type: USER_FRIENDS_ASYNC_ERROR, payload: error });
      throw error;
    } finally {
      dispatch({ type: USER_FRIENDS_ASYNC_FINISH });
    }
  };
}

export function setFollowUser() {
  return {
    type: SET_FOLLOW_USER,
  };
}

export function setUnfollowUser() {
  return {
    type: SET_UNFOLLOW_USER,
  };
}
