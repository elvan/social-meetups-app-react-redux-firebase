import {
  CREATE_MEETUP,
  DELETE_MEETUP,
  FETCH_MEETUPS,
  UPDATE_MEETUP,
} from './meetupConstants';

const initialState = {
  /** @type {any[]} */
  meetups: [],
};

export function meetupReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_MEETUPS:
      return {
        ...state,
        meetups: payload,
      };

    case CREATE_MEETUP:
      return {
        ...state,
        meetups: [...state.meetups, payload],
      };

    case UPDATE_MEETUP:
      return {
        ...state,
        meetups: state.meetups.map((meetup) => {
          if (meetup.id === payload.id) {
            return payload;
          }
          return meetup;
        }),
      };

    case DELETE_MEETUP:
      return {
        ...state,
        meetups: state.meetups.filter((meetup) => meetup.id !== payload),
      };

    default:
      return state;
  }
}
