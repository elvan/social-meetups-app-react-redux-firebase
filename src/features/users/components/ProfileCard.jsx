import { Card } from 'react-bootstrap';

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
            <Card.Text className='text-center'>{profile.displayName}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
