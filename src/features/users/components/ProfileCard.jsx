import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProfileCard = ({ profile }) => {
  return (
    <>
      {profile && (
        <Card>
          <Card.Img
            variant='top'
            src={profile.photoURL || '/assets/user.png'}
          />
          <Card.Body className='p-3'>
            <Card.Text className='text-center'>
              <Link to={`/profiles/${profile.id}`} className='stretched-link'>
                {profile.displayName}
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
