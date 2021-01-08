import React from 'react'
import { View, StyleSheet,  StatusBar, ScrollView } from 'react-native'
import {Avatar, Title, Caption, Text, TouchableRipple} from 'react-native-paper'

import { MaterialCommunityIcons } from '@expo/vector-icons';

import constants from '../utils/contants';


export const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar
                barStyle="light-content'"
                backgroundColor="#240F62"
            />
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row', marginTop: 15}}>
                    <Avatar.Image
                        source= {{
                            uri: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
                        }}
                        size={80}
                    />
                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>Alexis Fallas</Title>
                        <Caption style={styles.caption}>@makkpas</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="map-marker-radius" size={24} color={constants.COLORS.LIGHT_GRAY} />
                    <Text style={{marginLeft: 8, color: constants.COLORS.LIGHT_GRAY}}>San Vito, Costa Rica</Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="email" size={24} color={constants.COLORS.LIGHT_GRAY} />
                    <Text style={{marginLeft: 8, color: constants.COLORS.LIGHT_GRAY}}>makkpas07@gmail.com</Text>
                </View>
            </View>
            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox,{
                    borderRightColor: constants.COLORS.PURPLE_AUX,
                    borderRightWidth: 1,
                }]}>
                    <Title style={styles.textColor}>$1.60</Title>
                    <Caption style={styles.textColor}>Wallet</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title style={styles.textColor}>227</Title>
                    <Caption style={styles.textColor}>Games</Caption>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="heart-outline" size={24} color={constants.COLORS.LIGHT_GRAY} />
                        <Text style={styles.menuItemText}>Your Favorites</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="credit-card-settings-outline" size={24} color={constants.COLORS.LIGHT_GRAY} />
                        <Text style={styles.menuItemText}>Payment</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="share-outline" size={24} color={constants.COLORS.LIGHT_GRAY} />
                        <Text style={styles.menuItemText}>Tell your friends</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="atom-variant" size={24} color={constants.COLORS.LIGHT_GRAY} />
                        <Text style={styles.menuItemText}>Intregrations</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="account-check-outline" size={24} color={constants.COLORS.LIGHT_GRAY} />
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="settings-outline" size={24} color={constants.COLORS.LIGHT_GRAY} />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.PURPLE_BACK,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: constants.COLORS.LIGHT,
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        color: constants.COLORS.LIGHT_GRAY,

      },
      row: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      infoBoxWrapper: {
        borderBottomColor: constants.COLORS.PURPLE_AUX,
        borderBottomWidth: 1,
        borderTopColor: constants.COLORS.PURPLE_AUX,
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
      },
      infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: constants.COLORS.LIGHT_GRAY,
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
      textColor: {
          color: constants.COLORS.LIGHT_GRAY,
      }
});
