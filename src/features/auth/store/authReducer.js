import { LOGIN_USER, LOGOUT_USER } from './authConstants';

const initialStates = {
  ready: false,
  authenticated: false,
  currentUser: null,
};

export function authReducer(state = initialStates, { type, payload }) {
  switch (type) {
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
