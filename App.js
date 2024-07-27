import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import StackNavigator from './src/navigation/StackNavigator';
import HomeScreen from './src/screen/HomeScreen';

export default function App() {
  return (
    <NavigationContainer >
      <StackNavigator/>
    </NavigationContainer>
  );
}


