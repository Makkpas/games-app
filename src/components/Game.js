import React , {useEffect}from 'react';
import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {DateTime} from 'luxon';

import constants from '../utils/contants';
import axios from '../utils/axios'

const Luxon = DateTime.local().setLocale('es');

const Game = ({ game, navigation}) => {

    const { name, background_image, rating, released } = game;

    const date = DateTime.fromISO(released).setLocale('es').toFormat('MMM dd, y');

    const [newGame, setGame] = React.useState([]);

    useEffect(() =>{
        axios
            .get(`games/${game.id}`)
            .then((res)=>{
                setGame(res.data);
            })
            .catch((err)=> console.log(err));
    },[setGame]);


    const loadGame = () =>{
        navigation.navigate(constants.SCREEN.DETAILS, {
            newGame
        });
    }

    return (
        <Pressable style={styles.card} onPress={loadGame}>
            <ImageBackground 
            style={styles.poster}
            source={{uri:background_image}}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(34,0,132,0.8)']}
                    style={styles.gradient}
                    start={{x: 0, y: 0.5}}
                    end={{x: 0, y: 1}}
                />

                <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                        <Text numberOfLines={1} style={styles.title}>
                            {name}
                        </Text>
                        <Text style={styles.rating}>
                            {rating}
                        </Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={styles.release_date}>
                            {date}
                        </Text>
                    </View>
                </View>
                
            </ImageBackground>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: constants.COLORS.LIGHT_GRAY,
        marginVertical: 8,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'flex-end',
        position:'relative',
    },
    poster: {
        width: 336,
        height: 152,
        borderRadius: 4,
    },
    textContainer: {
        width: 302,
        marginHorizontal: 8,
        flexDirection: 'column',
        position: 'absolute',
        bottom: 16,
    },
    title: {
        color: constants.COLORS.LIGHT_GRAY,
        fontWeight: "bold",
        flexGrow: 1,
        flexWrap: "wrap",
        flexShrink: 2,
        marginRight: 4,
        fontSize: 14,
    },
    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex-end'
    },
    rating: {
        color: constants.COLORS.WARNING,
        fontWeight: "bold",
    },
    release_date: {
        color: constants.COLORS.GRAY,
        fontSize: 12,
        textTransform: "capitalize",
    },
    gradient: {
        height: 152,
    }
});

export default Game;
