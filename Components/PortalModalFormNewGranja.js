import {View, Text} from 'react-native';
import React from 'react';
import {Modal, Portal} from 'react-native-paper';
import NewGranjaForm from './NewGranjaForm';

const PortalModalFormNewGranja = ({visible, hideModal}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        dismissable={true}
        contentContainerStyle={{
          backgroundColor: '#eee',
          padding: 20,
          margin: 10,
          borderRadius: 15,
        }}>
        <NewGranjaForm hideModal={hideModal} />
      </Modal>
    </Portal>
  );
};

export default PortalModalFormNewGranja;
