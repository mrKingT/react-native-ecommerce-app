import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/HomeScreen'
import ShopScreen from '../screen/ShopScreen'
import BagScreen from '../screen/BagScreen'
import FavoritesScreen from '../screen/FavoritesScreen'
import ProfileScreen from '../screen/ProfileScreen'


export default function BottomTabNavigator() {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'#DB3022',
        tabBarLabelStyle:{fontWeight:'bold'},
    }}>
        <Tab.Screen name='Home' component={HomeScreen} options={{
            tabBarLabel:'Home',
            tabBarIcon:({focused,color,size})=>{
                return(
                    <Image 
                    style={styles.tabBarIcon}
                    source={focused?require('../assets/icons/focus-home.png'):require('../assets/icons/home.png')}/>
                )
            }
        }}/>
        <Tab.Screen name='Shop' component={ShopScreen} options={{
            tabBarLabel:'Shop',
            tabBarIcon:({focused,color,size})=>{
                return(
                    <Image 
                    style={styles.tabBarIcon}
                    source={focused?require('../assets/icons/focus-shop.png'):require('../assets/icons/shop.png')}/>
                )
            }
        }}/>
        <Tab.Screen name='Bag' component={BagScreen} options={{
            tabBarLabel:'Bag',
            tabBarIcon:({focused,color,size})=>{
                return(
                    <Image 
                    style={styles.tabBarIcon}
                    source={focused?require('../assets/icons/focus-bag.png'):require('../assets/icons/bag.png')}/>
                )
            }
        }}/>
        <Tab.Screen name='Favorites' component={FavoritesScreen} options={{
            tabBarLabel:'Favoritres',
            tabBarIcon:({focused,color,size})=>{
                return(
                    <Image 
                    style={styles.tabBarIcon}
                    source={focused?require('../assets/icons/focus-heart.png'):require('../assets/icons/heart.png')}/>
                )
            }
        }}/>
        <Tab.Screen name='Profile' component={ProfileScreen} options={{
            tabBarLabel:'Profile',
            tabBarIcon:({focused,color,size})=>{
                return(
                    <Image 
                    style={styles.tabBarIcon}
                    source={focused?require('../assets/icons/focus-profile.png'):require('../assets/icons/profile.png')}/>
                )
            }
        }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarIcon:{
        height:24,
        width:24
    }
})