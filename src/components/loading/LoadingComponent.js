import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import ContentShimmer from 'react-content-shimmer';

export const LoadingComponent = () => {
  return (
    <Card className='mb-3 rounded bg-white shadow'>
      <Card.Body className='row clearfix py-3 px-4'>
        <ContentShimmer size={{ height: 100, width: 100 }} rounded='50%' />
        <Col>
          <Card.Title className='mb-2'>
            <ContentShimmer rounded={'4px'} size={{ height: 24, width: 300 }} />
          </Card.Title>
          <Card.Text>
            <ContentShimmer rounded={'4px'} size={{ height: 15, width: 150 }} />
          </Card.Text>
        </Col>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>
          <ContentShimmer
            rounded={'4px'}
            size={{ height: 15, width: 400 }}
            style={{ margin: '0.25rem 0' }}
          />
        </ListGroupItem>
        <ListGroupItem>
          <ContentShimmer
            rounded={'4px'}
            size={{ height: 15, width: 300 }}
            style={{ margin: '0.25rem 0' }}
          />
        </ListGroupItem>
        <ListGroupItem className='bg-light py-2 d-flex'>
          <ContentShimmer
            size={{ height: 50, width: 50 }}
            rounded='50%'
            style={{ marginRight: '0.5rem' }}
          />
          <ContentShimmer size={{ height: 50, width: 50 }} rounded='50%' />
        </ListGroupItem>
        <ListGroupItem>
          <ContentShimmer
            style={{ marginBottom: '1rem' }}
            rounded={'4px'}
            size={{ height: 15, width: 400 }}
          />
          <ContentShimmer rounded={'4px'} size={{ height: 15, width: 300 }} />
        </ListGroupItem>
        <ListGroupItem className='bg-light d-flex'>
          <ContentShimmer
            style={{ marginRight: '0.5rem' }}
            rounded={'4px'}
            size={{ height: 36, width: 120 }}
          />
          <ContentShimmer rounded={'4px'} size={{ height: 36, width: 100 }} />
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};
