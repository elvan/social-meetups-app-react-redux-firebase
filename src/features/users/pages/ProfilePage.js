import { ProfileHeader } from '../components/ProfileHeader';

export const ProfilePage = () => {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='shadow rounded bg-white p-3 mb-3'>
          <ProfileHeader />
        </div>
        <div className='shadow rounded bg-white p-3 mb-3'>
          <h2>Profile Content</h2>
        </div>
      </div>
    </div>
  );
};
