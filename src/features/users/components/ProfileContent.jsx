import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { ProfileAboutTab } from './ProfileAboutTab';
import { ProfileMeetupsTab } from './ProfileMeetupsTab';
import { ProfilePhotosTab } from './ProfilePhotosTab';

export const ProfileContent = ({ currentUser, profile }) => {
  return (
    <Tab.Container id='left-tabs-example' defaultActiveKey='tab-1'>
      <Row>
        <Col sm={3}>
          <Nav variant='pills' className='flex-column'>
            <Nav.Item>
              <Nav.Link eventKey='tab-1'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='tab-2'>Photos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='tab-3'>Meetups</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='tab-4'>Followers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='tab-5'>Following</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey='tab-1'>
              <ProfileAboutTab currentUser={currentUser} profile={profile} />
            </Tab.Pane>
            <Tab.Pane eventKey='tab-2'>
              <ProfilePhotosTab currentUser={currentUser} profile={profile} />
            </Tab.Pane>
            <Tab.Pane eventKey='tab-3'>
              <ProfileMeetupsTab profile={profile} />
            </Tab.Pane>
            <Tab.Pane eventKey='tab-4'>
              <h5>Followers</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                deleniti officia obcaecati commodi libero, delectus eos nihil
                hic ullam fuga asperiores nisi quaerat eligendi repellat
                blanditiis unde quia natus. Saepe?
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey='tab-5'>
              <h5>Following</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                deleniti officia obcaecati commodi libero, delectus eos nihil
                hic ullam fuga asperiores nisi quaerat eligendi repellat
                blanditiis unde quia natus. Saepe?
              </p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
