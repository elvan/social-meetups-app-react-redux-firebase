import cuid from 'cuid';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const MeetupForm = ({
  setFormOpen,
  setMeetups,
  handleCreateMeetup,
  selectedMeetup,
}) => {
  const initialValues = selectedMeetup ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
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

    handleCreateMeetup({
      ...values,
      id: cuid(),
      hostedBy: 'Cristiano',
      hostPhotoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      attendees: [],
    });

    setFormOpen(false);
  };

  return (
    <div className='shadow p-3 mb-3 bg-white rounded'>
      <h4>Create New Meetup</h4>
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

        <Form.Group controlId='category'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='text'
            name='category'
            value={values.category}
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

        <Form.Group controlId='date'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type='date'
            name='date'
            value={values.date}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Group>

        <Button variant='success' type='submit' className='mr-2'>
          Submit
        </Button>
        <Button
          variant='light'
          type='button'
          onClick={() => setFormOpen(false)}
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
};
