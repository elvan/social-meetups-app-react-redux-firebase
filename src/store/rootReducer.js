import { combineReducers } from 'redux';
import { asyncReducer } from '../async/asyncReducer';
import { modalReducer } from '../components/modals/store/modalReducer';
import { authReducer } from '../features/auth/store/authReducer';
import { meetupReducer } from '../features/meetups/store/meetupReducer';
import { profileReducer } from '../features/profiles/store/profileReducer';
import { testReducer } from '../features/sandbox/store/testReducer';

export const rootReducer = combineReducers({
  asyncState: asyncReducer,
  authState: authReducer,
  meetupState: meetupReducer,
  modalState: modalReducer,
  profileState: profileReducer,
  testState: testReducer,
});
