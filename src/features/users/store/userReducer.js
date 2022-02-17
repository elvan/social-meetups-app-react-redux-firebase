import {
  LISTEN_TO_CURRENT_PROFILE,
  LISTEN_TO_SELECTED_PROFILE,
  LISTEN_TO_USER_MEETUPS,
  LISTEN_TO_USER_PHOTOS,
  USER_ASYNC_ERROR,
  USER_ASYNC_FINISH,
  USER_ASYNC_START,
} from './userConstants';

const initialState = {
  loading: false,
  error: null,
  currentProfile: null,
  selectedProfile: null,
  photos: [],
  meetups: [],
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
    default:
      return state;
  }
}
