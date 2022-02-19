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

const initialState = {
  loading: false,
  error: null,
  currentProfile: null,
  selectedProfile: null,
  photos: [],
  meetups: [],
  friendshipsLoading: false,
  friendshipsError: null,
  following: [],
  followers: [],
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
    case USER_FRIENDSHIPS_ASYNC_START:
      return {
        ...state,
        friendshipsLoading: true,
        friendshipsError: null,
        following: [],
        followers: [],
      };
    case USER_FRIENDSHIPS_ASYNC_FINISH:
      return {
        ...state,
        friendshipsLoading: false,
      };
    case USER_FRIENDSHIPS_ASYNC_ERROR:
      return {
        ...state,
        friendshipsLoading: false,
        friendshipsError: payload,
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
    default:
      return state;
  }
}
