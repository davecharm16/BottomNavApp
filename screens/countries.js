import * as React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import styles from '../global_style/style.js';

const country_name = [
    {
        name: 'Japan',
    },
    {
        name: 'Korea',
    },
    {
        name: 'Philippines',
    },
    {
        name: 'United States of America',
    },
    {
        name: 'Brazil',
    },
    {
        name: 'China',
    },
    {
        name: 'Singapore',
    },
    {
        name: 'Switzerland',
    },
    {
        name: 'Malaysia',
    },
    {
        name: 'Thailand',
    },
];


const Country = ({ name }) => (
    <View style = {styles.item}>
      <Text style = {styles.item_text}>{name}</Text>
    </View>
  );

const Countries = () => {
    const renderItem = ({ item }) => (
        <Country name={item.name} />
    );

    return(
        <SafeAreaView>
            <FlatList
                data={country_name}
                renderItem = {renderItem}
                keyExtractor = {item => item.name}
            />
        </SafeAreaView>
    );
}


export default Countries;