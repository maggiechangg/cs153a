import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import picture from "./public/nyme.jpeg"

export default function App() {
  return (
    <View style={styles.container}>
      <View> 
        <Text style = {styles.developer}>  About the Developer: </Text>
      </View>

      <View> 
        <Text style = {styles.title}> Maggie Chang </Text>
      </View>
    

      <Image
          style={styles.newYork}
          source= {picture}
      />

      <View>
        <Text style= {styles.nyDescription}> 
        Maggie Chang is a rising senior at Brandeis University majoring in Applied Mathematics and Cello Music Performance with a minor in Computer Science.
        She has a shiba inu named Yuki and loves going on hikes with him. In her free time, she likes to cook, listen to music, and game. 
        </Text>

        <Text style= {styles.descriptionTitle}> Description</Text>
        
        <Text style= {styles.description}> 
        This app is created to help college students find quick and easy recipes. 
        Most of the time, students are swarmed with academics and work, leaving them little to no time to make meals. 
        Through this app, anyone will be able to search up dishes and follow step-by-step cooking instrutions with a list of recipes and ingredients needed. 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f4eec6'
  },
  
  developer:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:16,
    fontFamily: 'Verdana',
    backgroundColor:'#bca86e',
    color: '#f6f3ca',
    letterSpacing: 5,
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    paddingRight: 20,
    paddingLeft: 20
  },
 
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    fontFamily: 'Verdana',
    color: '#A07C2C',
    letterSpacing: 5,
    justifyContent: 'space-between',
    padding: 15, 
    paddingRight: 50,
    paddingLeft: 50
    
  },

  nyDescription: {
    textAlign: 'center',
    fontSize:12,
    fontFamily: 'Verdana', 
    letterSpacing: 1,
    padding: 10,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#644116'
  },

  descriptionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:32,
    fontFamily: 'Verdana',
    backgroundColor:'lightyellow',
    color: '#bca86e',
    letterSpacing: 5,
    padding: 15,
    borderRadius: 10, 
  },

  description: {
    textAlign: 'center',
    fontSize:16,
    fontFamily: 'Verdana', 
    letterSpacing: 2,
    padding: 15,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#644116'
  },

  newYork: {
    width: 200,
    height: 300,
    borderWidth: 5,
    borderColor: '#bca86e',
    borderRadius:5,
  }
});
