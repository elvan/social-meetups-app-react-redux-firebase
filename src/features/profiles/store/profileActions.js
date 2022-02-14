import { LISTEN_TO_USER_PROFILE } from './profileConstants';

export function listenToUserProfile(profile) {
  return {
    type: LISTEN_TO_USER_PROFILE,
    payload: profile,
  };
}
