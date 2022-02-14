import {
  LISTEN_TO_USER_PROFILE,
  USER_ASYNC_ERROR,
  USER_ASYNC_FINISH,
  USER_ASYNC_START,
} from './userConstants';

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  userProfile: null,
};

export function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case USER_ASYNC_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER_ASYNC_FINISH:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case USER_ASYNC_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload,
      };
    case LISTEN_TO_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };
    default:
      return state;
  }
}
