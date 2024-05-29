import {Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../styles';

// Componente rehuttilizable para crear text inputs de formulario.
// Si numeric es true, verifica que sea un numero el campo entrado.
// Espera recibir un valor i un setter de su padre.
// Espera recibir un titulo que se mostrara arriba del input text.
const TextInputForm = ({value, setter, title, numeric}) => {
  const handleInput = valor => {
    // Verifica si el valor es un valor numerico
    if (numeric) {
      console.log('es numeric');

      if (/^[0-9]*\.?[0-9]*$/.test(valor)) {
        setter(valor);
      } else {
        setter('');
      }
    } else {
      console.log('no es numeric');
      setter(valor);
    }
  };
  return (
    <>
      <Text style={styles.textFormulari}>{title}</Text>
      <TextInput
        placeholder={numeric ? '0' : title}
        style={styles.textInputStyles}
        keyboardType="numeric"
        onChangeText={valor => handleInput(valor)}
        value={value.toString()}
      />
    </>
  );
};

export default TextInputForm;
