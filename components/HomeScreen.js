import React from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, Button,} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewFile from './NewFile';

const Stack = createNativeStackNavigator();
const image = {uri: 'https://i.pinimg.com/564x/3b/ea/44/3bea44c2684356f3bb1a30783d127a16.jpg'};

const MyStack = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Test"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen 
             name="NewFile" 
             component={NewFile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return(

    <SafeAreaView style ={{flex: 1}}> 
      <View style={styles.container}>

      <Text style={styles.text}>Welcome to Sapling!</Text>
     
      <Image 
        source={image} 
        style={styles.image} 
        resizeMode="contain"/>

      </View> 

      <View style= {styles.button1}>
       <Button
          title="Go to Existing File"
          onPress={() =>
            navigation.navigate('Profile')
          }
        />
      </View> 
      <View style={styles.button2}> 
        <Button 
          title="Create New File"
          onPress={() =>
            navigation.navigate(NewFile)
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
    fontSize: 32,
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
    bottom: 150,
    right: 200
  },

  button2: {
    flexDirection: "row", 
    backgroundColor: "black", 
    justifyContent: "center",
    margin: 0,
    position: "absolute",
    bottom: 150,
    right: 35,    
  },

});

export default MyStack;