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

export const ProfileFriendshipTab = ({ activeTab, currentUser, profile }) => {
  const { friendshipsLoading, friendshipsError, following, followers } =
    useSelector((state) => state.userState);

  const dispatch = useDispatch();

  const queryMemo = useMemo(() => {
    return activeTab === 'followers'
      ? getFollowersCollection(profile.id)
      : getFollowingCollection(profile.id);
  }, [activeTab, profile.id]);

  const listenCallback = useCallback(
    (data) => {
      return activeTab === 'followers'
        ? dispatch(listenToUserFollowers(data))
        : dispatch(listenToUserFollowing(data));
    },
    [dispatch]
  );

  useFirestoreCollection({
    queryMemo: queryMemo,
    listenCallback: listenCallback,
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
