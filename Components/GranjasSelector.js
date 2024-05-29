import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {IconButton} from 'react-native-paper';
import {styles} from '../styles';

import PortalModalFormNewGranja from './PortalModalFormNewGranja';
import PortalModalDeleteGranja from './PortalModalDeleteGranja';

const GranjasSelector = ({title, setter}) => {
  const [selectedGranja, setSelectedGranja] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [deleteVisible, setDeleteVisible] = React.useState(false);
  const [granjas, setGranjas] = React.useState([]);

  const handleAddPress = () => {
    setVisible(true);
  };

  const handleLongPress = () => {
    setDeleteVisible(true);
    console.log(selectedGranja);
  };

  const hideModal = () => {
    setVisible(false);
    peticion();
  };
  const hideDeleteModal = () => {
    peticion();
    setDeleteVisible(false);
  };

  useEffect(() => {
    setter(granjas[selectedGranja]);
  }, [selectedGranja]);

  useEffect(() => {
    peticion();
  }, []);

  const peticion = () => {
    fetch('http://192.168.1.111:8000/api/granjas/index', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setGranjas(data);
        setSelectedGranja(0);
        setter(data[0]);
      });
  };

  return (
    <>
      <PortalModalFormNewGranja visible={visible} hideModal={hideModal} />
      <PortalModalDeleteGranja
        visible={deleteVisible}
        hideModal={hideDeleteModal}
        granja={granjas[selectedGranja]}
      />
      <View style={styles.wrapper}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
        <View style={styles.fila}>
          <IconButton
            icon={'plus-circle'}
            iconColor="green"
            size={30}
            onPress={handleAddPress}
            onLongPress={handleLongPress}></IconButton>
          <Picker
            selectedValue={granjas[selectedGranja]?.nom}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedGranja(itemIndex)
            }
            mode="dropdown"
            style={{height: 50, width: 200}}>
            {granjas?.map((granja, index) => (
              <Picker.Item
                key={index}
                label={granja.nom}
                value={granja.nom}
                cosa={2}
              />
            ))}
          </Picker>
        </View>
        <Text style={{textAlign: 'center'}}>
          Kcal/m2:{' '}
          <Text style={{color: 'blue'}}>
            {' '}
            {granjas[selectedGranja]?.kcal_per_m2}­
          </Text>{' '}
          TempMax:{' '}
          <Text style={{color: 'red'}}>
            {granjas[selectedGranja]?.temperatura_maxima}
          </Text>
        </Text>
      </View>
    </>
  );
};

export default GranjasSelector;
