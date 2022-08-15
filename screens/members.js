import * as React from 'react';
import { View,SafeAreaView, FlatList, Image } from 'react-native';
import styles from '../global_style/style.js';
import {Card, Title } from 'react-native-paper';

const MEMBER_DATA = [
    {
        member_name : 'Dave Charm Bulaquena',
        photo : require('../assets_folder/members/BULAQUENA.webp'),
    },
    {
        member_name : 'Ellen Nicole Amado',
        photo : require('../assets_folder/members/AMADO.jpg'),
    },
    {
        member_name : 'Rogena Sefin Tibegar',
        photo : require('../assets_folder/members/TIBEGAR.webp'),
    },
    {
        member_name : 'Liezel Valencia',
        photo : require('../assets_folder/members/VALENCIA.webp'),
    },
    {
        member_name : 'Gabriel Carlos',
        photo : require('../assets_folder/members/CARLOS.webp'),
    },
];
const CreateCard = ({name, image_src}) => {
    return(
        <View style={styles.card_holder}>
            <Card style={styles.card_container}>
                <Card.Content>
                    <Title style = {{textAlign: 'center'}}>{name}</Title>
                </Card.Content>
                <Image source={image_src} style = {styles.cover}/>
            </Card>
      </View>
    );
}

const MemberView = () => {
    const renderItem = ({item}) =>{
        return (
            <CreateCard name = {item.member_name} image_src = {item.photo}/>
        );
    }
    return (
        <SafeAreaView>
            <FlatList
                data = {MEMBER_DATA}
                renderItem = {renderItem}
            />
        </SafeAreaView>
    );
}

export default MemberView;