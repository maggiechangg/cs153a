import React from "react";
import { Image, StyleSheet, Text, SafeAreaView, View, Button,} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const image = {uri: 'https://i.pinimg.com/564x/3b/ea/44/3bea44c2684356f3bb1a30783d127a16.jpg'};

const HomeScreen = ({ navigation }) => {
  return(

    <SafeAreaView style ={{flex: 1}}> 
      <View style={styles.container}>

      <Text style={styles.text}> Track your musical progress below! </Text>
     
      <Image 
        source={image} 
        style={styles.image} 
        resizeMode="contain"/>
      
      <Text style={styles.quote}> 
        "Progress is not achieved by luck or accident, but by working on yourself daily."{'\n'} -Epictetus
        </Text>

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
    marginTop: 15,
    marginBottom: 50,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 80,
    backgroundColor: "#6D8B74",
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

  quote: {
    margin: "auto",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    backgroundColor: "#6D8B74",
    color: "white",
  },

});

export default HomeScreen;