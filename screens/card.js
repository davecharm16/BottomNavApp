import * as React from 'react';
import { FlatList, View, _View } from 'react-native';
import styles from '../global_style/style';
import { Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


const FLAG_DATA = [{
        country_name: 'JAPAN',
        flag_data: require('../assets_folder/flags/japan.png'),
        continent: 'ASIA'
    },
    {
        country_name: 'KOREA',
        flag_data: require('../assets_folder/flags/korea.png'),
        continent: 'ASIA'
    },
    {
        country_name: 'PHILIPPINES',
        flag_data: require('../assets_folder/flags/philippine.png'),
        continent: 'ASIA'
    },
    {
        country_name: 'SWITZERLAND',
        flag_data: require('../assets_folder/flags/switzerland.png'),
        continent: 'EUROPE'
    },
    {
        country_name: 'NEW ZEALAND',
        flag_data: require('../assets_folder/flags/new_zealand.png'),
        continent: 'OCEANIA'
    },
];


const CreateCard = ({ country, image_src, continent }) => {
    return ( 
        <View style = { styles.card_holder }>
        <Card style = { styles.card_container } >
            <Card.Content>
                <Title> { country } </Title> 
            </Card.Content> 
            <Card.Cover source = { image_src }/> 
            <Card.Content>
                <Paragraph> { continent } </Paragraph>
            </Card.Content > 
        </Card> 
        </View >
    );
}

const CardView = () => {

    const renderItem = ({ item }) => {
        return ( <
            CreateCard country = { item.country_name }
            image_src = { item.flag_data }
            continent = { item.continent }
            />
        );
    }
    return ( <SafeAreaView >
        <FlatList data = { FLAG_DATA }
        renderItem = { renderItem }/> 
        </SafeAreaView >
    );
};

export default CardView;