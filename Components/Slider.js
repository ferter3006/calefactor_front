import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SliderElement from './SliderElement';

const Slider = () => {
  return (
    <View>
      <ScrollView horizontal={true}>
        <SliderElement model={"ppe"} />
        <SliderElement />
        <SliderElement />
      </ScrollView>
    </View>
  );
};

export default Slider;
