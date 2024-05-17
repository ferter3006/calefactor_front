import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const handleInput = (value, setter) => {
  // Verifica si el valor es un valor numerico
  if (/^[0-9]*\.?[0-9]*$/.test(value)) {
    setter(value);
  } else {
    setter('');
  }
};

const TextInputForm = ({styles, value, setter, title}) => {
  return (
    <>
      <Text style={styles.textFormulari}>{title}</Text>
      <TextInput
        placeholder="0"
        style={styles.textInputStyles}
        keyboardType="numeric"
        onChangeText={val => handleInput(val, setter)}
        value={value.toString()}
      />
    </>
  );
};

export default TextInputForm;
