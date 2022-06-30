import React,{useState} from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import {useValue} from './ValueContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const Async3 = ({navigation}) => {
    const [text,setText] = useState("");
    const {currentValue,setCurrentValue} = useValue();
    return (
        <SafeAreaView style={styles.container}>

            <View>
            <Text> File Name: {currentValue.fileName} </Text>
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
        backgroundColor: "#4E944F",
        color: "white",
        justifyContent: "flex-start",
    },
  
    inputContainer:{
      marginTop: 50,
      marginBottom: 40,
      marginLeft: 600,
      marginRight: 500,
      height: 30,
      textAlign: "center",
      borderWidth: 3,
      borderColor: "#4E944F",
      borderRadius: 20, 
    },
  
    submitButton: {
        width: 150,
        textAlign: "center",
        height: "auto",
        marginLeft: 605,
        textAlign: "center",
        borderWidth: 4,
        marginLeft: 600,
        marginRight: 600,
        height: 35,
        borderWidth: 3,
        borderColor: "#4E944F",
        borderRadius: 20,
        backgroundColor: "#B4E197",
        fontSize: 24,
    }
  
  });

export default Async3;