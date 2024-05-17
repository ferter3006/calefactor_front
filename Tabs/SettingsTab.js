import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';

const SettingsTab = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.h1}>Algorithm Settings</Text>
      <View>
        <Text style={styles.textFormulari}>Kcal per m²</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: '5%',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: '5%',
  },
  textFormulari: {
    fontSize: 16,
  },
});

export default SettingsTab;
