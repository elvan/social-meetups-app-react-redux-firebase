import {
  AUTH_ASYNC_ERROR,
  AUTH_ASYNC_FINISH,
  AUTH_ASYNC_START,
  AUTH_IS_READY,
  AUTH_LOGIN_USER,
  AUTH_LOGOUT_USER,
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
    case AUTH_IS_READY:
      return {
        ...state,
        ready: true,
      };
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
    case AUTH_LOGIN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          uid: payload.uid,
          displayName: payload.displayName,
          email: payload.email,
          photoURL: payload.photoURL,
          providerId: payload.providerData[0].providerId,
        },
      };
    case AUTH_LOGOUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
}
