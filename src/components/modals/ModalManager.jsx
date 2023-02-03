import React from 'react';
import { useSelector } from 'react-redux';

import { TestModal } from '../../features/sandbox/components/TestModal';

export const ModalManager = () => {
  // @ts-ignore
  const currentModal = useSelector((state) => state.modalState);

  const modalLookup = {
    TestModal,
  };

  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const SpecificModal = modalLookup[modalType];

    renderedModal = <SpecificModal {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
};
