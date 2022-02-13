import {
  AUTH_ASYNC_ERROR,
  AUTH_ASYNC_FINISH,
  AUTH_ASYNC_START,
  LOGIN_USER,
  LOGOUT_USER,
} from './authConstants';

const initialStates = {
  ready: false,
  pending: false,
  authenticated: false,
  currentUser: null,
  error: null,
};

export function authReducer(state = initialStates, { type, payload }) {
  switch (type) {
    case AUTH_ASYNC_START:
      return {
        ...state,
        pending: true,
      };
    case AUTH_ASYNC_FINISH:
      return {
        ...state,
        pending: false,
      };
    case AUTH_ASYNC_ERROR:
      return {
        ...state,
        pending: false,
        error: payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoUrl: '/assets/user.png',
        },
      };

    case LOGOUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };

    default:
      return state;
  }
}
