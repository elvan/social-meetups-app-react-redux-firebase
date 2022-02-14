import {
  MEETUP_CREATE,
  MEETUP_DELETE,
  MEETUP_LIST,
  MEETUP_UPDATE,
} from './meetupConstants';

const initialState = {
  /** @type {any[]} */
  meetups: [],
};

export function meetupReducer(state = initialState, { type, payload }) {
  switch (type) {
    case MEETUP_LIST:
      return {
        ...state,
        meetups: payload,
      };
    case MEETUP_CREATE:
      return {
        ...state,
        meetups: [...state.meetups, payload],
      };
    case MEETUP_UPDATE:
      return {
        ...state,
        meetups: state.meetups.map((meetup) => {
          if (meetup.id === payload.id) {
            return payload;
          }
          return meetup;
        }),
      };
    case MEETUP_DELETE:
      return {
        ...state,
        meetups: state.meetups.filter((meetup) => meetup.id !== payload),
      };
    default:
      return state;
  }
}
