import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Async1Screen from './Async1';
import Async2Screen from './Async2';
import AudioRecordingScreen from './AudioRecording';
import HomeScreen from './HomeScreen';
import Bio from './bio';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Sapling Home" component={HomeScreen} />
        <Tab.Screen name="Create" component={Async1Screen} />
        <Tab.Screen name="Files" component={Async2Screen} />
        <Tab.Screen name="Record" component={AudioRecordingScreen} />
        <Tab.Screen name="Bio" component={Bio} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
