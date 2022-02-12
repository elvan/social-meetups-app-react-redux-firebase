import ContentShimmer from 'react-content-shimmer';

export const LoadingComponent = () => {
  return (
    <div className='p-2 d-flex align-items-center'>
      <div>
        <div className='p-2 d-flex align-items-center'>
          <ContentShimmer size={{ height: 80, width: 80 }} rounded='10%' />
          <div className='p-3'>
            <ContentShimmer
              style={{ marginBottom: '1rem' }}
              size={{ height: 15, width: 200 }}
            />
            <ContentShimmer size={{ height: 15, width: 100 }} />
          </div>
        </div>
        <ContentShimmer
          style={{ marginTop: '1rem' }}
          rounded={'10px'}
          size={{ height: 15, width: 350 }}
        />
        <ContentShimmer
          style={{ marginTop: '1rem' }}
          rounded={'10px'}
          size={{ height: 15, width: 350 }}
        />
      </div>
    </div>
  );
};
