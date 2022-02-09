import { Button, Form } from 'react-bootstrap';

export const MeetupForm = () => {
  return (
    <div className='shadow p-3 mb-3 bg-white rounded'>
      <h4>Create New Meetup</h4>
      <Form>
        <Form.Group controlId='title'>
          <Form.Label>Meetup Title</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group controlId='category'>
          <Form.Label>Category</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group controlId='title'>
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' />
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group controlId='venue'>
          <Form.Label>Venue</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group controlId='date'>
          <Form.Label>Date</Form.Label>
          <Form.Control type='date' />
        </Form.Group>

        <Button variant='success' type='submit' className='mr-2'>
          Submit
        </Button>
        <Button variant='light' type='button'>
          Cancel
        </Button>
      </Form>
    </div>
  );
};
