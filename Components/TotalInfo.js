import {View, Text} from 'react-native';
import React from 'react';

const TotalInfo = ({styles, total}) => {
  return (
    <>
      <Text style={styles.textFormulari}>Total: {total.toString()} m²</Text>
      <Text style={styles.textFormulari}>
        Necesitats: {total.toString()} KCal
      </Text>
    </>
  );
};

export default TotalInfo;
