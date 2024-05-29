import {View, Text} from 'react-native';
import React from 'react';

const TotalInfo = ({styles, total, granjaSelected}) => {

  const calculaKCal = () => {
    var aux = Math.round(total * granjaSelected?.kcal_per_m2 * 100) / 100
    return aux
  }
  return (
    <>
      <Text style={styles.textFormulari}>Nau: {total.toString()} m²</Text>
      <Text style={styles.textFormulari}>
        Total: {calculaKCal()} KCal
      </Text>
    </>
  );
};

export default TotalInfo;
