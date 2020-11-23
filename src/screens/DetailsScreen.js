import React , {useEffect} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Item } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {DateTime} from 'luxon';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import axios from '../utils/axios'

import constants from '../utils/contants';
import { FlatList } from 'react-native-gesture-handler';

import Screenshot from '../components/Screenshot';

export const DetailsScreen = ({navigation, route}) => {

    const {newGame} = route.params;
    const platforms = newGame.platforms;
    
    
    const Luxon = DateTime.local().setLocale('es');
    const date = DateTime.fromISO(newGame.released).setLocale('es').toFormat('MMM dd, y');
    
    const [screen, setScreen] = React.useState([]);
    
    useEffect(() =>{
        axios
            .get(`games/${newGame.id}/screenshots`)
            .then((res)=>{
                setScreen(res.data.results);
            })
            .catch((err)=> console.log(err));
    },[setScreen]);

    const genreList = ({item})=>{
        return (
            <View style={styles.genreContainer}>
                <Text style={styles.textGenre}>{item.name}</Text>
            </View>
        )
    };

    useEffect(() =>{
		navigation.setOptions({
			headerLeft: (props)=>{
				return (
					<View style={styles.containerButtonIcon} >
						<MaterialIcons 
							name="keyboard-backspace" 
							size={32} 
							color={constants.COLORS.PURPLE_AUX} 
							style={{opacity: 1}}
							{...props}
						/>
					</View>
				)
			},
		});
	})
    

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={[StyleSheet.absoluteFill, styles.cover]}
                    source={{uri:newGame.background_image}}
                />
                <LinearGradient
                    colors={['transparent', 'rgba(36,15,98,0.9)', 'rgba(36,15,98,1)']}
                    style={styles.gradient}
                    start={{x: 0, y: 0.6}}
                    end={{x: 0, y: 1}}
                />    
                
                <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{newGame.name}</Text>
                        <Text style={styles.rate}>{newGame.rating}</Text>
                    </View>
                </View>
                
                <Text style={styles.released}>{date}</Text>
                
			</View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.subtitle} >About</Text>
                <Text style={styles.textDescription}>{newGame.description_raw}</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.subtitle} >Platforms</Text>
                <Text>
                    {platforms.map((platform, index) =>
                        <View key={index}>
                            <Text style={styles.textPlatforms} key={index}>{platform.platform.name}</Text>
                        </View>
                    )}
                </Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.subtitle}>Genres</Text>
                <Text>
                    <FlatList
                        horizontal
                        data={newGame.genres}
                        renderItem={genreList}
                        keyExtractor= {(item) =>`${item.id}`}
                    >

                    </FlatList>
                </Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.subtitle}>Screenshot</Text>
                <Screenshot {...{screens: screen}}></Screenshot>
            </View>
            <View style={{height:24}}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.PURPLE_BACK,
    },
    imageContainer: {
        position: 'relative',
		width: 375,
        height: 300,
    },
    gradient: {
        height: 300,
    },
    textContainer: {
        width: 302,
        marginHorizontal: 8,
        flexDirection: 'column',
        position: 'absolute',
        bottom: 16,
    },
    titleContainer:{
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex-end',
        position: 'absolute',
        bottom: 10,
        marginHorizontal: 8,
    },
    title:{
        bottom: 15, 
        color: constants.COLORS.LIGHT_GRAY,
        fontSize: 24,
    },
    subtitle:{
        bottom: 15, 
        color: constants.COLORS.LIGHT_GRAY,
        fontSize: 24,
        fontWeight: 'bold',
    },
    rate:{
        color: constants.COLORS.WARNING,
        fontWeight: "bold",
    },
    released:{
        position:'absolute', 
        bottom: 0, 
        margin: 15,
        color: constants.COLORS.GRAY2,
        fontSize: 12,
    },
    descriptionContainer: {
        margin: 15,
    },
    textDescription:{
        color: constants.COLORS.LIGHT_GRAY,
    },
    textGenre:{
        color: constants.COLORS.LIGHT_GRAY,
        marginHorizontal: 4,
    },
    textPlatforms: {
        color: constants.COLORS.LIGHT_GRAY,
        marginHorizontal: 5,
    },
    genreContainer: {
        flexDirection: 'column',
    },
    containerButtonIcon: {
        backgroundColor:constants.COLORS.PURPLE_BACK2,
		width: 40,
		height: 40,
        marginHorizontal: 20,
        borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
});




