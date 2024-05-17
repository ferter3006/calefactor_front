import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Slider from '../Components/Slider';
import TextInputForm from '../Components/TextInputForm';
import TotalInfo from '../Components/TotalInfo';

const HomeTab = () => {
  const [allargada, setAllargada] = React.useState('');
  const [amplada, setAmplada] = React.useState('');
  const [total, setTotal] = React.useState('');

  React.useEffect(() => {
    setTotal(allargada * amplada);
  }, [allargada, amplada]);

  return (
    <View style={styles.wrapper}>
      {/* FILA 1 */}
      <View style={styles.fila}>
        <View style={styles.columna1}>
          <TextInputForm
            styles={styles}
            value={amplada}
            setter={setAmplada}
            title={'Amplada Nau (m)'}
          />
        </View>
        <View style={styles.columna1}>
          <TextInputForm
            styles={styles}
            value={allargada}
            setter={setAllargada}
            title={'Allargada Nau (m)'}
          />
        </View>
      </View>

      {/* FILA 2 */}
      <View style={[styles.fila, {marginTop: '5%'}]}>
        <View style={styles.columna1}>
          <TotalInfo styles={styles} total={total} />
        </View>
      </View>

      <Slider />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.5,
    flexDirection: 'column',
    marginTop: '5%',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
  },
  columna1: {
    flex: 0.5,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  textFormulari: {
    fontWeight: 'bold',
    marginEnd: '5%',
    textAlign: 'center',
  },
  textInputStyles: {
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: '5%',
  },
});

export default HomeTab;
