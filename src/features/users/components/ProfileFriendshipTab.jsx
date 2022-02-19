import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFirestoreCollection } from '../../../hooks/useFirestoreCollection';
import {
  getFollowersCollection,
  getFollowingCollection,
} from '../services/friendshipService';
import {
  listenToUserFollowers,
  listenToUserFollowing,
} from '../store/userActions';
import { ProfileCard } from './ProfileCard';

export const ProfileFriendshipTab = ({ activeTab, profile }) => {
  const profileId = profile.id;
  const { following, followers } = useSelector((state) => state.userState);

  const dispatch = useDispatch();

  const followersQueryMemo = useMemo(() => {
    return getFollowersCollection(profileId);
  }, [profileId]);

  const followingQueryMemo = useMemo(() => {
    return getFollowingCollection(profileId);
  }, [profileId]);

  const followersListenCallback = useCallback(
    (data) => {
      return dispatch(listenToUserFollowers(data));
    },
    [dispatch]
  );

  const followingListenCallback = useCallback(
    (data) => {
      return dispatch(listenToUserFollowing(data));
    },
    [dispatch]
  );

  useFirestoreCollection({
    queryMemo: followersQueryMemo,
    listenCallback: followersListenCallback,
  });

  useFirestoreCollection({
    queryMemo: followingQueryMemo,
    listenCallback: followingListenCallback,
  });

  let followersContent =
    followers.length > 0 ? (
      followers.map((follower) => (
        <div key={follower.id} className='col-3 mb-3'>
          <ProfileCard profile={follower} />
        </div>
      ))
    ) : (
      <div className='col-12'>
        <p className='text-center'>{profile.displayName} has no followers.</p>
      </div>
    );

  let followingContent =
    following.length > 0 ? (
      following.map((following) => (
        <div key={following.id} className='col-3 mb-3'>
          <ProfileCard profile={following} />
        </div>
      ))
    ) : (
      <div className='col-12'>
        <p className='text-center'>{profile.displayName} has no following.</p>
      </div>
    );

  return (
    <>
      {profile && (
        <>
          <h5>{activeTab === 'followers' ? 'Followers' : 'Following'}</h5>
          <div>
            <div className='mb-3'>
              <div className='row'>
                {activeTab === 'followers'
                  ? followersContent
                  : followingContent}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
