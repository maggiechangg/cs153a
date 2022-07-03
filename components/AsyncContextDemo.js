import React,{useState, useEffect} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';
import { Audio } from 'expo-av';

const App = () => {
  const [data,setData]  = useState({username:"anon"});
  
  return (
    <ValueProvider value={data}>
        <AsyncDemo />
    </ValueProvider>
  )
  }

export default App;