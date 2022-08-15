import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: '90%'
    },

    item: {
        flex: 1,
        padding: 20,
        margin: 10,
        backgroundColor: '#004ecb',
        justifyContent: 'center',
        alignItems: 'center'
    },

    item_text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
    },

    card_container: {
        justifyContent: 'center',
        alignContent: 'center',
        margin: 37,
        padding: 10,
    },

    card_holder: {
        flex: 1,
    },
    cover: {
        height: 180,
        width: 180,
        borderRadius: 180,
        alignSelf: 'center'
    }

});