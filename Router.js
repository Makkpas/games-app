import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'

import { HomeScreen } from './src/screens/HomeScreen';

import constants from './src/utils/contants';


const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={constants.SCREEN.HOME}
                    component={HomeScreen}
                    options={{
                        title: 'GAMES',
                        headerShown:false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
