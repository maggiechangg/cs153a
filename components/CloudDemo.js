import React, {useState } from 'react';
import {View, Text, TextInput, Button } from 'react-native';
import Axios from 'axios';

const url="https://damp-springs-29329.herokuapp.com";

const CloudDemo = () => {
    const [email,setEmail] = useState("tjhickey@brandeis.edu");
    const [key,setKey] = useState("todo");
    const [value,setValue] = useState("test value 0");
    const [result,setResult] = useState("result goes here");
    const [comment,setComment] = useState("comment");
    
    const getData = async () => {
        console.log('getData')
        const response = await Axios.post(url+"/cloud/get",{email,key});
        setResult(JSON.stringify(response.data));
    };

    const getKeyData = async () => {
        console.log('getData')
        const response = await Axios.post(url+"/cloud/getKeyData",{key});
        setResult(JSON.stringify(response.data));
    };

    const getAllData = async () => {
        console.log('getAllData')
        const response = await Axios.get(url+"/cloud/showAll");
        console.dir(response.data);
        setResult(JSON.stringify(response.data));
    };
    const storeData = async () => {
        console.log('store');
        const response = await Axios.post(url+"/cloud/store",{email,key,value});
        console.dir(response.data);
        setResult(JSON.stringify(response.data));
    };
    const clearData = async() => {
        console.log('clear');
        const response = await Axios.post(url+"/cloud/clear",{email});
        setResult(JSON.stringify(response.data));
    };



  return (
    <View style={{ flex: 1, padding: 24 }}>
        <Text style={{fontSize:32,fontWeight:'bold'}}>
            Cloud Storage Demo
        </Text>
        <Text style={{padding:10,width:"50%",backgroundColor:'lightgrey'}}>
            In this demo we can store key/value pairs of data in the cloud for each user,
            identified by their email address. We can also look up the value for a given key,
            and lookup all of the data (email,key,value) and delete all the data for a given email.
        </Text>
        <Text style={{marginBottom:20,width:"50%",backgroundColor:'lightgreen'}}>
            Change the values for the email, key, and value and then press the
            get, getAll, store, and clear buttons to see what happens! This uses the 
            server at the url 
        </Text>
        <Text style={{borderWidth:3,padding:5,justifyContent:'center',width:'50%'}}>
            {url}
        </Text>
        <View style={{flexDirection:'row'}}>
            <Text>email:</Text>
            <TextInput
                placeholder='email'
                onChangeText = {(text) => setEmail(text)}
                defaultValue={email}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>key:</Text>
            <TextInput
                placeholder='key'
                onChangeText = {(text) => setKey(text)}
                defaultValue={key}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <Text>value:</Text>
            <TextInput
                placeholder='value'
                onChangeText = {(text) => setValue(text)}
                defaultValue={value}
            />
        </View>
        <View style={{flexDirection:'row'}}>
           <Text> comment: </Text>
           <TextInput
              placeholder='comment'
              onChangeText = {(text) => setComment(text)}
              defaultValue={comment}
            />
         </View>
        <View style={{flex:1}}></View>
        <View style={{flexDirection:'row'}}>
            <Button
                title="get"
                color="lightgreen"
                onPress = {() => getData() } 
            />
            <Button
                title="getKeyData"
                color="lightgreen"
                onPress = {() => getKeyData() } 
            />
            <Button
                title="getAll"
                color="lightblue"
                onPress = {() => getAllData() } 
            />
            <Button
                title="store"
                color="pink"
                onPress = {() => storeData() } 
            />
            <Button
                title="clear"
                color="aqua"
                onPress = {() => clearData() } 
            />

        </View>
        <Text>{result}</Text>


    </View>
  );
};

export default CloudDemo;