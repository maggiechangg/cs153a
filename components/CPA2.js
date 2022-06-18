import React, { useState, useEffect } from 'react';
import {Image, Text, View, TextInput, FlatList, Button, ActivityIndicator } from 'react-native';

const Doterra = () => {
    const [data,setData] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [temporaryIngredient, setTemporaryIngredient] = useState('');
    const [ingredient, setIngredient] = useState('');

    const getMeals = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredient);
            const json = await response.json();
            setData(json);
          setData(json.meals); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [ingredient])

    return(
        <View style={{padding: 10, margin:5, borderWidth:2, backgroundColor:'bisque'}}>
            <Text style={{fontSize:40}}>Meal Finder</Text>

            <TextInput
                style={{ height: 40 }}
                placeholder="Enter Ingredient"
                onChangeText={newText => setTemporaryIngredient(newText)}
                defaultValue={temporaryIngredient}
            />
            <Button
                title="Search"
                onPress={() => {
                    setIngredient(temporaryIngredient)
                }}
            />
        
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ idMeal }, index) => idMeal}
                    renderItem={({item}) => mealList(item)}
        
                />
            )}

        </View>
    );
}

const mealList = (item) => {
    return (
    <View style={{flexDirection:'row', padding:15, margin:5,
                            borderWidth:2,
                                    justifyContent:'space-evenly',
                                    backgroundColor:'#fedcba',}}>
                        <Text style={{fontSize: 18}} >{item.strMeal}</Text>
        
                        <Image 
                            style={ {  width: 100, height: 100,}}
                            source={{uri:item.strMealThumb}} />    
        </View>
    );
}

export default Doterra;