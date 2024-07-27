import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import BottomTabNavigator from './BottomTabNavigator'

export default function StackNavigator() {
    const Stack = createNativeStackNavigator()
  return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen
            name='Main'
            component={BottomTabNavigator}/>
        </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})