import React,{useState} from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Button, SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import {useValue} from './ValueStorageContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

const Async1 = ({navigation}) => {
    const [text,setText] = useState("");
    // const {currentValue,setCurrentValue} = useValue();

    const storeData = async (value) => {
        try {
          console.log('in storeData');
        //   setCurrentValue(value);
          await AsyncStorage.setItem('@async', JSON.stringify(value));
        } catch (e) {
          console.dir(e)
        }
    }
  
    const getAll = async () => {
        try{
            const keys = await AsyncStorage.getAllKeys();
            const result = await AsyncStorage.multiGet(keys);
            console.log(result)
            return result.map(req => JSON.parse(req));
        }
        catch (e) {
          console.dir(e)
        }
      }    

    return (
        <SafeAreaView style={styles.container}>
            <Text 
                style={styles.title}> Create New File Below 
            </Text>

            <View 
                style={{alignContent: 'center'}}>
                <Text 
                    style={{textAlign: 'center', marginTop: 15,}}> Type File Name Below: 
                </Text>

                <TextInput
                    style={styles.inputContainer}
                    onChangeText={(text) => setText(text)}/>
                
                <TouchableOpacity 
                    onPress={() => {storeData({fileName:text}), getAll()}} 
                    style={styles.submitButton}>
                        <Text> Submit </Text>
                </TouchableOpacity>

                <Text 
                    style={{fontSize: 30, margin: 'auto',}}> 
                    {/* File Name: {currentValue.fileName} */}
                </Text> 
                </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E9EFC0',
    },

    title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 80,
        backgroundColor: "#6D8B74",
        color: "white",
        justifyContent: "flex-start",
    },
  
    inputContainer:{
        fontSize: 30,
        textAlign: "center",
        textAlign: "center",
        borderWidth: 3,
        borderColor: "#6D8B74",
        borderRadius: 20, 
        margin: "auto",
    },
  
    submitButton: {
        textAlign: "center",
        borderColor: "#A1B57D",
        borderRadius: 20,
        backgroundColor: "#A1B57D",
        fontSize: 24,
        marginTop: 20,
        margin: 'auto',
        width: 200,
    }
  
  });
  
export default Async1;