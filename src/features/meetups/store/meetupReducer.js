import { sampleData } from '../data/sampleData';
import { CREATE_MEETUP, DELETE_MEETUP, UPDATE_MEETUP } from './meetupConstants';

const initialState = {
  meetups: sampleData,
};

export function meetupReducer(state = initialState, { type, payload }) {
  switch (type) {
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
