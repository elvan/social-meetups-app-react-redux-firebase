import { LOGIN_USER, LOGOUT_USER } from './authConstants';

export function loginUser(payload) {
  return {
    type: LOGIN_USER,
    payload: payload,
  };
}

export function logout() {
  return {
    type: LOGOUT_USER,
  };
}
