import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {launchCamera} from 'react-native-image-picker';
import TextInputForm from '../Components/TextInputForm';
import {styles} from '../styles';
import GranjasSelector from '../Components/GranjasSelector';

const SettingsTab = () => {
  const [newImage, setNewImage] = React.useState(null);

  const [kCal, setKCal] = React.useState(100);

  const handlePressCamera = async () => {
    test();
    console.log('Pressed Camera');
    const result = await launchCamera({
      mediaType: 'photo',
      maxHeight: 200,
      maxWidth: 200,
    });
    console.log(result.assets[0].uri);
    setNewImage(result.assets[0].uri);
  };

  const test = () => {
    console.log('test');
    fetch('http://192.168.1.111:8000/api/calefactores/index', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.fila}>
        <Text style={styles.h1}>Algorithm Settings</Text>
      </View>
      <View style={styles.fila}>
        <View style={styles.columna1}>
          <TextInputForm
            value={kCal}
            setter={setKCal}
            title={'Kcal per m²'}
            numeric={true}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingsTab;
