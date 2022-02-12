import { combineReducers } from 'redux';
import { asyncReducer } from '../common/async/asyncReducer';
import { modalReducer } from '../components/modals/store/modalReducer';
import { authReducer } from '../features/auth/store/authReducer';
import { meetupReducer } from '../features/meetups/store/meetupReducer';
import { testReducer } from '../features/sandbox/store/testReducer';

export const rootReducer = combineReducers({
  asyncState: asyncReducer,
  authState: authReducer,
  meetupState: meetupReducer,
  modalState: modalReducer,
  testState: testReducer,
});
