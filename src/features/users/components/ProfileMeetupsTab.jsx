import { useState } from 'react';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { ProfileMeetupCard } from './ProfileMeetupCard';

export const ProfileMeetupsTab = ({ currentUser, profile }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {profile && (
        <div>
          <div className='mb-3'>
            <div className='d-flex justify-content-between align-items-start'>
              <div>
                <h5>Meetups</h5>
              </div>
            </div>
          </div>
          <Tabs defaultActiveKey='future' id='uncontrolled-tab-example'>
            <Tab eventKey='future' title='Future Meetups'>
              <Row>
                <Col xs={4} className='p-3'>
                  <ProfileMeetupCard />
                </Col>
                <Col xs={4} className='p-3'>
                  <ProfileMeetupCard />
                </Col>
                <Col xs={4} className='p-3'>
                  <ProfileMeetupCard />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey='past' title='Past Meetups'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                adipisci minus ab consequuntur voluptatem tempore veritatis quo
                accusamus, quia nulla repudiandae. Nisi exercitationem minima
                voluptates natus, facilis impedit excepturi quia.
              </p>
            </Tab>
            <Tab eventKey='hosting' title='Hosting'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                adipisci minus ab consequuntur voluptatem tempore veritatis quo
                accusamus, quia nulla repudiandae. Nisi exercitationem minima
                voluptates natus, facilis impedit excepturi quia.
              </p>
            </Tab>
          </Tabs>{' '}
        </div>
      )}
    </>
  );
};
