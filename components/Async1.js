import React,{useState} from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import {useValue} from './ValueContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Async2 from './Async2';

const Stack = createNativeStackNavigator();


const Async1 = ({navigation}) => {
    const [text,setText] = useState("");
    const {currentValue,setCurrentValue} = useValue();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}> Create New File Below </Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Type File Name Here"
                    onChangeText={(text) => setText(text)}
                />
            </View> 
            
            {/* <View style={styles.submitButton}>
                <Button 

                title="Save File Name"
                onPress = {() => setCurrentValue({fileName:text})}
                /> 
            </View> */}
            

            <TouchableOpacity 
                 onPress = {() => setCurrentValue({fileName:text})}>
              
                <Text style={styles.submitButton} > Submit </Text>
            </TouchableOpacity>


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
  
export default Async1;