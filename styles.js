import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  h2: {
    fontSize: 18,
    marginBottom: '5%',
  },
  columna1: {
    flex: 0.5,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  textFormulari: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInputStyles: {
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: '5%',
  },
  textError:{
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
  }
});
