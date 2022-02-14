import { ModalWrapper } from '../../../components/modals/ModalWrapper';

export const TestModal = ({ data }) => {
  return (
    <ModalWrapper size='md' header='Test Modal'>
      <div>The data is: {data}</div>
    </ModalWrapper>
  );
};
