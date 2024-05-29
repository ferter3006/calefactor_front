import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {ActivityIndicator, Button, IconButton} from 'react-native-paper';
import TextInputForm from './TextInputForm';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// Componente para crear una nueva granja dede un formulario que es un Modal
// Hay que borrar los botones y los metodos de captura de imagen i tal, es para los Calefactores (testing)
const NewGranjaForm = ({hideModal}) => {
  const [nom, setNom] = React.useState('');
  const [kCalPerm2, setKCalPerm2] = React.useState('');
  const [tempMax, setTempMax] = React.useState('');
  const [waitingServer, setWaitingServer] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [respontMessage, setRespontMessage] = React.useState('');

  const handleCheckPress = () => {
    setRespontMessage('');
    if (waitingServer) {
      //return;
    }
    console.log('enviamos post');
    setWaitingServer(true);

    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('kcal_per_m2', kCalPerm2);
    formData.append('temperatura_maxima', tempMax);

    if (image) {
      formData.append('image', {
        uri: image.uri,
        name: image.fileName,
        type: image.type,
      });
    }

    fetch('http://192.168.1.111:8000/api/granjas/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWaitingServer(false);
        if (!data.status) {
          setRespontMessage(data.message);
        } else {
          hideModal();
        }
      });
  };

  return (
    <View>
      <View>
        <Text style={[styles.h2, {textAlign: 'center'}]}>
          Nou tipus de Granja
        </Text>
      </View>
      <View>
        <TextInputForm
          value={nom}
          setter={setNom}
          title="Nom Granja"
          numeric={false}
        />
        <Text></Text>
        <TextInputForm
          value={kCalPerm2}
          setter={setKCalPerm2}
          title={'kCal / m²'}
          numeric={true}
        />
        <Text></Text>
        <TextInputForm
          value={tempMax}
          setter={setTempMax}
          title={'Temp Max (°C)'}
          numeric={true}
        />
      </View>
      <Text style={styles.textError}>{respontMessage}</Text>

      <Text></Text>
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
  );
};

export default NewGranjaForm;
