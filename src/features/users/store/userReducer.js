import {
  CLEAR_FOLLOWING_USER,
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

const initialState = {
  loading: false,
  error: null,
  currentProfile: null,
  selectedProfile: null,
  photos: [],
  meetups: [],
  friendsLoading: false,
  friendsError: null,
  following: [],
  followers: [],
  followingUser: false,
};

export function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case USER_ASYNC_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USER_ASYNC_FINISH:
      return {
        ...state,
        loading: false,
      };
    case USER_ASYNC_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case LISTEN_TO_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: payload,
      };
    case LISTEN_TO_SELECTED_PROFILE:
      return {
        ...state,
        selectedProfile: payload,
      };
    case LISTEN_TO_USER_PHOTOS:
      return {
        ...state,
        photos: payload,
      };
    case LISTEN_TO_USER_MEETUPS:
      return {
        ...state,
        meetups: payload,
      };
    case USER_FRIENDS_ASYNC_START:
      return {
        ...state,
        friendsLoading: true,
        friendsError: null,
      };
    case USER_FRIENDS_ASYNC_FINISH:
      return {
        ...state,
        friendsLoading: false,
      };
    case USER_FRIENDS_ASYNC_ERROR:
      return {
        ...state,
        friendsLoading: false,
        friendsError: payload,
      };
    case LISTEN_TO_USER_FOLLOWING:
      return {
        ...state,
        following: payload,
      };
    case LISTEN_TO_USER_FOLLOWERS:
      return {
        ...state,
        followers: payload,
      };
    case SET_FOLLOW_USER:
      return {
        ...state,
        followingUser: true,
      };
    case SET_UNFOLLOW_USER:
      return {
        ...state,
        followingUser: false,
      };
    case CLEAR_FOLLOWING_USER:
      return {
        ...state,
        followingUser: false,
        following: [],
        followers: [],
      };
    default:
      return state;
  }
}
