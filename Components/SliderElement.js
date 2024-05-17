import {Image, View} from 'react-native';
import React from 'react';
import {Avatar, Button, Card, Text} from 'react-native-paper';

const SliderElement = ({model, brand, kCal}) => {
  
  return (
    <View>
      <Card style={{margin: 10, width: 220, padding: 10}}>
        <Card.Title title={model} subtitle={brand} />
        <Card.Cover source={require('../Assets/image1.png')} />
        <Card.Content>
          <Text variant="bodyMedium">{kCal}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default SliderElement;
