import React, { useState, useEffect } from 'react';
import {Image, Text, View, TextInput, Button, StyleSheet } from 'react-native';

const Ghibli = () => {
    const [data,setData] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [temporaryID, setTemporaryID] = useState('');
    const [id, setId] = useState('');

    const getMovies = async () => {
        try {
            const response = await fetch('https://ghibliapi.herokuapp.com/films/' + temporaryID);
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
            <br/> 

            <TextInput
                style={styles.textBox}
                placeholder="Enter Movie ID"
                onChangeText={newText => setTemporaryID(newText)}
                defaultValue={temporaryID}
            />
            <br/>
            <Button
                title="Search Bar"
                style={styles.button}
                onPress={() => {
                    setId(temporaryID)
                }}
            />

            <Text style ={styles.movieTitle}>{data.title}</Text> 
            <Text style ={styles.movieTitle}>{data.original_title}</Text> 
            <Image style ={styles.movieImage} source = {data.image}/> 
            <Text style={styles.description}> 
                Release Year: {data.release_date} 
                <br/> 
                Director: {data.director}
                <br/> 
                Movie Description: {data.description} 
            
            </Text>
            
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
        color: '#71A5DE',
        letterSpacing: 2,
        justifyContent: 'space-between',
    },
    movieTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Verdana',
        color: '#4464ad',
        letterSpacing: 5,
        justifyContent: 'space-between',
        paddingBottom: 5,
        paddingTop: 20      
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
        color: '#83B0E1'
    },
  
    movieImage: {
        width: 700,
        height: 1000,
        borderColor: '#AECBEB',
        borderRadius:5,
        borderWidth: 4,
        alignContent:'center'
    },

    textBox: {
        height: 30, 
        width: 300,
        padding: 20,
        borderColor: '#BFD7FF'
    },
    description: {
        alignItems: 'center',
        backgroundColor: '#71A5DE',
        padding: 10,
        fontSize: 32,
        letterSpacing: 2,
        justifyContent: 'space-between',
        padding: 50
    },
    
  
   
  });

export default Ghibli;