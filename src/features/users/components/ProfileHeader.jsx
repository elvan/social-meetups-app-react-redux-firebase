import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getFollowingDocument } from '../services/friendService';
import { followUser, unfollowUser } from '../store/userActions';
import { CLEAR_FOLLOWING_USER, SET_FOLLOW_USER } from '../store/userConstants';

export const ProfileHeader = ({ currentUser, profile }) => {
  const userId = currentUser?.uid;
  const profileId = profile.id;

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { authenticated } = useSelector((state) => state.authState);
  const { friendsLoading, followingUser } = useSelector(
    (state) => state.userState
  );

  useEffect(() => {
    if (userId === profileId) {
      return;
    }
    setLoading(true);

    async function fetchFollowingDocument() {
      try {
        const followingDoc = await getFollowingDocument(profileId);
        if (followingDoc?.exists) {
          dispatch({ type: SET_FOLLOW_USER });
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchFollowingDocument().then(() => setLoading(false));

    return () => {
      dispatch({ type: CLEAR_FOLLOWING_USER });
    };
  }, [dispatch, userId, profileId]);

  async function handleFollowUser() {
    try {
      dispatch(followUser(profile));
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function handleUnfollowUser() {
    try {
      await dispatch(unfollowUser(profile));
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      {profile && (
        <div className='row'>
          <div className='col-md-8'>
            <div className='media'>
              <img
                src={profile.photoURL || '/assets/user.png'}
                alt='user'
                className='rounded-circle align-self-start mr-3'
                style={{ width: '100px' }}
              />

              <div className='media-body'>
                <h4 className='mt-0'>{profile.displayName}</h4>
                <h6>Blogger</h6>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='row'>
              <div className='col-6 text-center'>
                <div className='display-4'>{profile.followersCount || 0}</div>
                <div className=''>Followers</div>
              </div>

              <div className='col-6 text-center'>
                <div className='display-4'>{profile.followingCount || 0}</div>
                <div className=''>Following</div>
              </div>
            </div>

            {authenticated && currentUser?.uid !== profile.id && (
              <>
                <hr />
                <div>
                  <button
                    disabled={friendsLoading}
                    className={
                      followingUser
                        ? 'btn btn-block btn-info'
                        : 'btn btn-block btn-outline-info'
                    }
                    onClick={
                      followingUser ? handleUnfollowUser : handleFollowUser
                    }
                  >
                    <div className='d-flex justify-content-center align-items-center'>
                      {friendsLoading && (
                        <Spinner
                          animation='border'
                          style={{ height: '22.5px', width: '22.5px' }}
                        />
                      )}
                      {!friendsLoading &&
                        (followingUser ? 'Unfollow' : 'Follow')}
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
