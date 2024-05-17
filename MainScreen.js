import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeTab from './Tabs/HomeTab';
import SettingsTab from './Tabs/SettingsTab';

const Tab = createMaterialTopTabNavigator();
const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CalculApp" component={HomeTab} />
      <Tab.Screen name="Settings" component={SettingsTab} />
    </Tab.Navigator>
  );
};

export default MainScreen;
