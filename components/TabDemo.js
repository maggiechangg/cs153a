import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Bio from './bio';
import GhibliTest from './ghibliTest';
import HomeScreen from './HomeScreen';
import NewFile from './NewFile';
import Async2Screen from './Async2';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Sapling Home" component={HomeScreen} />
        <Tab.Screen name="Files" component={Async2Screen} />
        <Tab.Screen name="Bio" component={Bio} />
        <Tab.Screen name="Create" component={NewFile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}