import cuid from 'cuid';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MeetupFormPage = ({
  createMeetup,
  selectedMeetup,
  updateMeetup,
}) => {
  const initialValues = selectedMeetup ?? {
    title: '',
    date: '',
    category: '',
    city: '',
    venue: '',
    description: '',
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (selectedMeetup) {
      updateMeetup({
        ...selectedMeetup,
        ...values,
      });
    } else {
      createMeetup({
        ...values,
        id: cuid(),
        hostedBy: 'Cristiano',
        hostPhotoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        attendees: [],
      });
    }
  };

  return (
    <Row>
      <Col xs={12} md={8} className='mb-3'>
        <div className='p-3 bg-white rounded shadow'>
          {selectedMeetup ? (
            <h4>Edit the Meetup</h4>
          ) : (
            <h4>Create New Meetup</h4>
          )}

          <hr />

          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId='title'>
              <Form.Label>Meetup Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value={values.title}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>

            <Form.Group controlId='date'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type='date'
                name='date'
                value={values.date}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                name='category'
                value={values.category}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>

            <Form.Group controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                name='city'
                value={values.city}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>

            <Form.Group controlId='venue'>
              <Form.Label>Venue</Form.Label>
              <Form.Control
                type='text'
                name='venue'
                value={values.venue}
                onChange={(event) => handleInputChange(event)}
              />
            </Form.Group>

            <Form.Group controlId='title'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                name='description'
                value={values.description}
                onChange={(event) => handleInputChange(event)}
                rows={5}
              />
            </Form.Group>

            <Button variant='success' type='submit' className='mr-2'>
              Submit
            </Button>
            <Button as={Link} to='/meetups' variant='light' type='button'>
              Cancel
            </Button>
          </Form>
        </div>
      </Col>
      <Col xs={12} md={4} className='mb-3'>
        <h4>Sidebar</h4>
      </Col>
    </Row>
  );
};
