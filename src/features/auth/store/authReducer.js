import {
  AUTH_IS_READY,
  AUTH_LOGIN_USER,
  AUTH_LOGOUT_USER,
} from './authConstants';

const initialStates = {
  ready: false,
  authenticated: false,
  currentUser: null,
};

export function authReducer(state = initialStates, { type, payload }) {
  switch (type) {
    case AUTH_IS_READY:
      return {
        ...state,
        ready: true,
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
