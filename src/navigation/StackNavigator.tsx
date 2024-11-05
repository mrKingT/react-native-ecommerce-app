import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import BottomTabNavigator from './BottomTabNavigator'
import LoginScreen from '../screen/LoginScreen'
import Colors from '../constant/Colors'
import EditProfile from '../screen/EditProfile'
import ProductListItem from '../component/shop/ProductListItem'
import ProductDetailScreen from '../component/shop/ProductDetailScreen'
import BagScreen from '../screen/BagScreen'
import PaymentScreen from '../screen/PaymentScreen'
import RegisterScreen from '../screen/RegisterScreen'
import FavoritesScreen from '../screen/FavoritesScreen'
import ProfileScreen from '../screen/ProfileScreen'
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
            <Stack.Screen name='Editprofile' component={EditProfile}/>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name='ProductList' component={ProductListItem} />
            <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
            <Stack.Screen name="BagScreen" component={BagScreen} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
            
        </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})