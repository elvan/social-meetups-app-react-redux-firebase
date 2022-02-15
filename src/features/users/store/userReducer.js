import {
  LISTEN_TO_CURRENT_PROFILE,
  LISTEN_TO_SELECTED_PROFILE,
  LISTEN_TO_USER_PHOTOS,
} from './userConstants';

const initialState = {
  currentProfile: null,
  selectedProfile: null,
  photos: [],
};

export function userReducer(state = initialState, { type, payload }) {
  switch (type) {
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
    default:
      return state;
  }
}
