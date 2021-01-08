import React, {useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native'

import Game from '../components/Game';

import axios from '../utils/axios';
import constants from '../utils/contants';


export const HomeScreen = ({navigation}) => {

    const [games, setGames] = React.useState([]);

    useEffect(() => {
        axios.get('games?page=2')
        .then((res) =>{
            setGames(res.data.results);
        })
        .catch((err)=>console.log(err));
    }, [setGames]);

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content'"
                backgroundColor="#240F62"
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>GAMES</Text>
            </View>
            <FlatList
            style={styles.list}
                data={games}
                renderItem={({ item }) => <Game {...{game: item, navigation: navigation}}/>}
                keyExtractor = {(item) =>`${item.id}`}
            />
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.PURPLE_BACK,
    },
    titleContainer: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 24,
    },
    title: {
        fontSize: 48,
        color: constants.COLORS.LIGHT,
    },
    list: {
        paddingHorizontal: 20,
        marginBottom: 50,
    },
    prueba: {
        borderRadius: 8,
    }
});


