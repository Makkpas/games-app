import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput, 
} from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import constants from '../utils/contants';


export const EditProfileScreen = () => {

    const buttonSheet = React.useRef(null);
    const fall = new Animated.Value(1);

    const renderContent = () => (
        // Body of the button sheet
        <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose your profile picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => buttonSheet.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
    const renderHeader = () => (
        // Header of the button sheet
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <BottomSheet
                ref={buttonSheet}
                snapPoints={[380, 0]}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction
                enabledBottomClamp = {true}
                renderContent={renderContent}
                renderHeader={renderHeader}
            />
            <Animated.View style={{
                    margin: 20, 
                    marginTop: 60,
                    opacity: Animated.add(0.3, Animated.multiply(fall ,1.0)),
            }}>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => buttonSheet.current.snapTo(0)}>
                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ImageBackground
                                source={{
                                    uri:'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
                                }}
                                style={{
                                    height: 100,
                                    width: 100,
                                }}
                                imageStyle={{borderRadius: 10}}
                            >
                                <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                }}>
                                    <Entypo name="camera" size={35} color={constants.COLORS.PURPLE_AUX} style={{
                                            opacity: .7,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }} 
                                    />
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={[styles.textColor ,{marginTop: 10, fontSize: 18, fontWeight: 'bold'}]}>
                        Alexis Fallas
                    </Text>
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} color={constants.COLORS.PURPLE_AUX} />
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor={constants.COLORS.LIGHT_GRAY}
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} color={constants.COLORS.PURPLE_AUX} />
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor={constants.COLORS.LIGHT_GRAY}
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-secret" size={20} color={constants.COLORS.PURPLE_AUX} />
                    <TextInput
                        placeholder="Nickname"
                        placeholderTextColor={constants.COLORS.LIGHT_GRAY}
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope-o" size={20} color={constants.COLORS.PURPLE_AUX} />
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        placeholderTextColor={constants.COLORS.LIGHT_GRAY}
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="globe" size={20} color={constants.COLORS.PURPLE_AUX} />
                    <TextInput
                        placeholder="Country"
                        placeholderTextColor={constants.COLORS.LIGHT_GRAY}
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="map-marker" size={20} color={constants.COLORS.PURPLE_AUX} />
                    <TextInput
                        placeholder="City"
                        placeholderTextColor={constants.COLORS.LIGHT_GRAY}
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <TouchableOpacity style={styles.commandButton}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.COLORS.PURPLE_BACK,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: constants.COLORS.PURPLE_AUX,
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: constants.COLORS.LIGHT_GRAY,
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: constants.COLORS.LIGHT_GRAY,
        shadowColor: constants.COLORS.PURPLE_BACK,
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: constants.COLORS.PURPLE_BACK2,
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: constants.COLORS.PURPLE,
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: constants.COLORS.LIGHT_GRAY,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: constants.COLORS.PURPLE_AUX,
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
        color: constants.COLORS.LIGHT_GRAY,
    },
    textColor: {
        color: constants.COLORS.LIGHT_GRAY,
    }
})
