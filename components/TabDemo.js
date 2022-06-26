import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Bio from './bio';
import GhibliTest from './ghibliTest';
import HomeScreen from './HomeScreen';
import NewFile from './NewFile';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Sapling Home Page" component={HomeScreen} />
        <Tab.Screen name="Files" component={GhibliTest} />
        <Tab.Screen name="Bio" component={Bio} />
        <Tab.Screen name="Create" component={NewFile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}