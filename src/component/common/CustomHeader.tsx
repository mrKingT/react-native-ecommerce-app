import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

export default function CustomHeader({title='header',navigation}) {
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>{navigation.goBack(null)}}>
            <Image style={[styles.headerEelement, styles.backIcon]} source={require('../../assets/icons/icon-back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity>
            <Image style={[styles.headerEelement, styles.searchIcon ]} source={require('../../assets/icons/icon-search.png')} />
        </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:60,
        backgroundColor:Colors.primaryBackgroundColor
    },
    headerEelement:{
        height:32,
        width:32,
        padding:10
    },
    searchIcon:{
        marginRight:20
    },
    backIcon:{
        marginLeft:10
    },
    headerText:{
        fontSize:18,
        fontWeight:'bold'
    }
})