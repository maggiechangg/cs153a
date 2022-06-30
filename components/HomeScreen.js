import React from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, Button,} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewFile from './NewFile';
import Async1 from "./Async1";
import Async2 from "./Async2";

const Stack = createNativeStackNavigator();
const image = {uri: 'https://i.pinimg.com/564x/3b/ea/44/3bea44c2684356f3bb1a30783d127a16.jpg'};

const Test = () => {
  
  return (
      <Stack.Navigator>

        <Stack.Screen
          name="Recording App"
          component={HomeScreen}
          options={{ title: 'Welcome to the Recording App!' }}
        />

        <Stack.Screen 
             name="NewFile" 
             component={NewFile} />

        <Stack.Screen 
             name="Async2" 
             component={Async2} />
      </Stack.Navigator>
  );
};

const HomeScreen = ({ navigation }) => {
  return(

    <SafeAreaView style ={{flex: 1}}> 
      <View style={styles.container}>

      <Text style={styles.text}> Track your musical progress below! </Text>
     
      <Image 
        source={image} 
        style={styles.image} 
        resizeMode="contain"/>

      </View> 

      <View style= {styles.button1}>
       <Button
          title="Go to Existing File"
          onPress={() =>
            navigation.navigate(Async2)
          }
        />
      </View> 
      <View style={styles.button2}> 
        <Button 
          title="Create New File"
          onPress={() =>
            navigation.navigate(Async1)
          }
        />
      </View>

    </SafeAreaView>
  );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EFC0'
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 300/2,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    marginBottom: 30,
  },

  text: {
    marginTop: 30,
    marginBottom: 50,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 80,
    backgroundColor: "#4E944F",
    color: "white",
    justifyContent: "flex-start",
  },

  button1: {
    flexDirection: "row", 
    backgroundColor: "black", 
    justifyContent: "center",
    margin: 0,
    position: "absolute",
    bottom: 100,
    right: 200, //200, 1200
    backgroundColor: "#4E944F", 
  },

  button2: {
    flexDirection: "row", 
    backgroundColor: "black", 
    justifyContent: "center",
    margin: 0,
    position: "absolute",
    bottom: 100,
    right: 35, //35, 500
    backgroundColor: "#4E944F", 
  },

});

export default Test;