import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import BottomTabNavigator from './BottomTabNavigator'
import LoginScreen from '../screen/LoginScreen'
import Colors from '../constant/Colors'

export default function StackNavigator() {
    const Stack = createNativeStackNavigator()
  return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{
            headerShown:false,
            cardStyle:{backgroundColor:Colors.primaryBackgroundColor}
        }}>
            <Stack.Screen
            name='Main'
            component={BottomTabNavigator}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})