import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

import { 
    HomeScreen, 
    DetailsScreen, 
    ProfileScreen, 
    EditProfileScreen 
} from './src/screens';

import constants from './src/utils/contants';
import { Dimensions, View } from 'react-native';
import contants from './src/utils/contants';


const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const {width} = Dimensions.get('window');

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name={constants.SCREEN.HOME}
                component={HomeScreen}
                options={{
                    title: 'GAMES',
                    headerShown:false,
                }}
            />
            <HomeStack.Screen 
                    name={constants.SCREEN.DETAILS} 
                    component={ DetailsScreen } 
                    options={{
                        title:'',
                        headerTransparent: true,
                        headerBackTitle: false,

                    }}
                />
        </HomeStack.Navigator>
    );
};


const ProfileStackScreen = ({navigation}) => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                    name={constants.SCREEN.PROFILE}
                    component={ProfileScreen}
                    options={{
                        title: '',
                        headerStyle: {
                            elevation: 0, //Android
                            shadowColor: 0, //IOS
                            backgroundColor: constants.COLORS.PURPLE_BACK,
                            height: 30,
                          },
                        headerRight: () => (
                            <View style={{marginTop: 15, marginRight:10}}>
                                <MaterialCommunityIcons.Button
                                    name="account-edit"
                                    size={25}
                                    backgroundColor={constants.COLORS.PURPLE_BACK}
                                    color={constants.COLORS.LIGHT_GRAY}
                                    onPress={() => navigation.navigate(constants.SCREEN.EDITPROFILE)}
                                />
                            </View>
                        ),
                    }}
                />
            <ProfileStack.Screen 
                    name={constants.SCREEN.EDITPROFILE} 
                    component={ EditProfileScreen } 
                    options={{
                        title:'Edit Profile',
                        headerTransparent: true,
                        headerTintColor: constants.COLORS.LIGHT_GRAY,
                    }}
                />
        </ProfileStack.Navigator>
    );
};

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === constants.SCREEN.HOME) {
                            iconName = focused
                                ? "home-variant"
                                : "home-variant-outline";
                        }else if (route.name === constants.SCREEN.LIBRARY) {
                            iconName = "library-shelves";
                        } else if (route.name === constants.SCREEN.PROFILE) {
                            iconName = "face-profile";
                        }
                        return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: constants.COLORS.LIGHT,
                    inactiveTintColor: constants.COLORS.PURPLE_AUX,
                    showLabel: false,
                    style:{
                        backgroundColor: constants.COLORS.PURPLE_BACK,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,

                        borderColor: constants.COLORS.PURPLE_BACK,
                        position: 'absolute',
                        bottom: 0,
                        width: width,
                        height: 50,
                        zIndex: 10,
                        padding: 10,
                    }
                }} 
            >
                {/* TODO: Cambiar el component del Library */}
                <Tab.Screen name={contants.SCREEN.HOME} component={HomeStackScreen} options={{ tabBarBadge: 3}} />
                <Tab.Screen name={contants.SCREEN.LIBRARY} component={ProfileStackScreen} />
                <Tab.Screen name={contants.SCREEN.PROFILE} component={ProfileStackScreen} />
            </Tab.Navigator>
            
        </NavigationContainer>
    );

};

export default Router;
