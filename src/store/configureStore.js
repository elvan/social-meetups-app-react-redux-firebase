import { createStore } from 'redux';
import { testReducer } from '../features/sandbox/store/testReducer';

export const configureStore = () => {
  return createStore(testReducer);
};
