import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import ExistingFile from './ExistingFile';


const NewFile = () => {
  const [fileName, setFileName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
     <TextInput
        style={styles.inputContainer}
        placeholder="Type File Name Here"
        onChangeText={newText => 
             setFileName(newText)}
        defaultValue={fileName}
      />
    
     
    <TouchableOpacity onPress={() =>
            navigation.navigate(ExistingFile)}>
      <Text style={styles.submitButton} > Submit </Text>
    </TouchableOpacity>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EFC0',
  },

  inputContainer:{
    marginTop: 50,
    marginBottom: 40,
    marginLeft: 500,
    marginRight: 500,
    height: 35,
    textAlign: "center",
    borderWidth: 3,
    borderColor: "#4E944F",
    borderRadius: 20
  },

  submitButton: {
    textAlign: "center",
    borderWidth: 4,
    marginLeft: 800,
    marginRight: 800,
    height: 35,
    borderWidth: 3,
    borderColor: "#4E944F",
    borderRadius: 20,
    backgroundColor: "#B4E197",
    fontSize: 24,
    
    
    
  }

});



export default NewFile;