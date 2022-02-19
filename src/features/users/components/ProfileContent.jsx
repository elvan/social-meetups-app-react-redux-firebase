import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { ProfileAboutTab } from './ProfileAboutTab';
import { ProfileFriendshipTab } from './ProfileFriendshipTab';
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
              <ProfileFriendshipTab
                activeTab='followers'
                profile={profile}
                currentUser={currentUser}
              />
            </Tab.Pane>
            <Tab.Pane eventKey='tab-5'>
              <ProfileFriendshipTab
                activeTab='following'
                profile={profile}
                currentUser={currentUser}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
