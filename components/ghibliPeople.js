import React, { useState, useEffect } from 'react';
import {Image, Text, View, TextInput, FlatList, Button, ActivityIndicator, StyleSheet } from 'react-native';

const Ghibli = () => {
    const [data,setData] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [temporaryID, setTemporaryID] = useState('');
    const [id, setId] = useState('');

    const getMovies = async () => {
        try {
            const response = await fetch('https://ghibliapi.herokuapp.com/people/' + temporaryID);
            const json = await response.json();
            setData(json);
            for(let i = 0; i < json.length; i++){
                if (json[i].id == temporaryID){
                    setData(json[i])
                }
            }
            console.log(data)


        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };
      useEffect(() => {getMovies()}, [id])

    return(
        <View style={styles.container}>
            <Text style={styles.websiteTitle}>Movie Finder</Text>

            <TextInput
                style={styles.textBox}
                placeholder="Enter Movie ID"
                onChangeText={newText => setTemporaryID(newText)}
                defaultValue={temporaryID}
            />
            <Button
                title="Search"
                onPress={() => {
                    setId(temporaryID)
                }}
            />
        
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({id}, index) => id}
                    renderItem={({item}) => filmList(item)}
        
                />
            )}
        </View>
    );
}

const filmList = (item) => {
    return (
    <View style={styles.layout}>
        <Text style={styles.movieTitle} >{item.title}</Text>
        <Text style={styles.movieTitle} >{item.name}</Text>
        <Text style={styles.movieTitle} >{item.gender}</Text>
        <Text style={styles.movieTitle} >{item.age}</Text>
        <Text style={styles.movieTitle} >{item.eye_color}</Text>
        
        
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'aliceblue',
        padding: 10, 
        margin:5, 
        borderWidth:2,
        flexDirection: 'column'   
     },
    
    layout:{
        flexDirection:'column', 
        padding:15, 
        margin:5,
        borderWidth:2,
        justifyContent:'space-evenly',
    },
    websiteTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: 'Verdana',
        color: 'darkblue',
        letterSpacing: 5,
        justifyContent: 'space-between',
    },
    movieTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Verdana',
        color: 'darkblue',
        letterSpacing: 5,
        justifyContent: 'space-between',
        paddingBottom: 20      
    },
  
    movieID: {
        textAlign: 'center',
        fontSize:12,
        fontFamily: 'Verdana', 
        letterSpacing: 1,
        padding: 10,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
        color: 'darkblue'
    },
  
    movieImage: {
        width: 700,
        height: 1000,
        borderWidth: 5,
        borderColor: 'darkblue',
        borderRadius:5,
        alignContent:'center'
    },

    textBox: {
        height: 30, 
        width: 300,
        padding: 20
    },
  
   
  });

export default Ghibli;