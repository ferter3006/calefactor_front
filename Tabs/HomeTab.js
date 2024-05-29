import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Slider from '../Components/Slider';
import TextInputForm from '../Components/TextInputForm';
import TotalInfo from '../Components/TotalInfo';
import {styles} from '../styles';
import GranjasSelector from '../Components/GranjasSelector';

const HomeTab = () => {
  const [allargada, setAllargada] = React.useState('');
  const [amplada, setAmplada] = React.useState('');
  const [total, setTotal] = React.useState('');
  const [granjaSelected, setGranjaSelected] = React.useState();

  React.useEffect(() => {
    setTotal(allargada * amplada);
  }, [allargada, amplada]);

  return (
    <View style={styles.wrapper}>
      {/* FILA 1 */}
      <View style={styles.fila}>
        <View style={styles.columna1}>
          <TextInputForm
            value={amplada}
            setter={setAmplada}
            title={'Amplada Nau (m)'}
            numeric={true}
          />
        </View>
        <View style={styles.columna1}>
          <TextInputForm
            value={allargada}
            setter={setAllargada}
            title={'Allargada Nau (m)'}
            numeric={true}
          />
        </View>
      </View>

      {/* FILA 2 */}
      <View style={[styles.fila, {marginTop: '5%'}]}>
        <View style={styles.columna1}>
          <TotalInfo styles={styles} total={total} granjaSelected={granjaSelected} />
        </View>
      </View>

      <View style={styles.fila}>
        <GranjasSelector title={'Tipus de Granja'} setter={setGranjaSelected} />
      </View>

      <Slider />
    </View>
  );
};

export default HomeTab;
