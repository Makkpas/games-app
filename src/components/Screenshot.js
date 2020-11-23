import React from 'react'
import { View, StyleSheet, Image} from 'react-native';
import { AntDesign , Ionicons } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

function Screenshot({ screens }) {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.card }>
                    <Image
                        resizeMode='cover'
                        style={styles.image}
                        source={{
                            uri: item.image,
                        }}
                    />

            </View>
        )
    };
   
    return (

        <FlatList
            horizontal
            data={screens}
            renderItem={renderItem}
            keyExtractor= {(item) =>`${item.id}`}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
    },
    image: {
        width: 196,
		height: 152,
		borderRadius: 4,
    },
    screenshotContainer: {
		marginTop: 25,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		alignItems: 'flex-start'
    },
    card: {
        marginHorizontal:8,
        width: 196,
		justifyContent: 'center',
		alignItems: 'center',
    }
    
})

export default Screenshot;
