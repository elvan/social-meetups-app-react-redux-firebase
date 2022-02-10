import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './testConstants';

const initialState = {
  data: 42,
};

export function testReducer(state = initialState, { type, payload }) {
  switch (type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - payload,
      };
    default:
      return state;
  }
}
