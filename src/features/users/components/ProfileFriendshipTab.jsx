import { ProfileCard } from './ProfileCard';

export const ProfileFriendshipTab = ({ currentUser, profile }) => {
  return (
    <>
      {profile && (
        <div>
          <div className='mb-3'>
            <div className='row'>
              <div className='col-3 mb-3'>
                <ProfileCard profile={profile} />
              </div>

              <div className='col-3 mb-3'>
                <ProfileCard profile={profile} />
              </div>

              <div className='col-3 mb-3'>
                <ProfileCard profile={profile} />
              </div>

              <div className='col-3 mb-3'>
                <ProfileCard profile={profile} />
              </div>

              <div className='col-3 mb-3'>
                <ProfileCard profile={profile} />
              </div>

              <div className='col-3 mb-3'>
                <ProfileCard profile={profile} />
              </div>

              <div className='col-3 mb-3'>
                <ProfileCard profile={profile} />
              </div>

              <div className='col-3 mb-3'>
                <ProfileCard profile={profile} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
