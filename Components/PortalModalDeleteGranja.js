import {View, Text} from 'react-native';
import React from 'react';
import {Button, IconButton, Modal, Portal} from 'react-native-paper';

const PortalModalDeleteGranja = ({visible, hideModal, granja}) => {
  const [waitingServer, setWaitingServer] = React.useState(false);
  const handleCheckPress = () => {
    fetch('http://192.168.1.111:8000/api/granjas/delete/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({id: granja.id}),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWaitingServer(false);
        hideModal();
      });
  };

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
        <View>
          <Text>Borrar la granja {granja?.nom} ?</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <IconButton
              icon="close"
              iconColor="red"
              size={30}
              onPress={hideModal}
            />
            {waitingServer ? <ActivityIndicator /> : ''}
            <IconButton
              icon="check"
              iconColor="green"
              size={30}
              onPress={handleCheckPress}
            />
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default PortalModalDeleteGranja;
