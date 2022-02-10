import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { testReducer } from '../features/sandbox/store/testReducer';

export const configureStore = () => {
  return createStore(testReducer, devToolsEnhancer({}));
};
