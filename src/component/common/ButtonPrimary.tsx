import { StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'



export default function ButtonPrimary({title,onPress, backgroundColor, textColor, style,textStyle}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonView,
        {backgroundColor:backgroundColor||Colors.primaryColor},
        style]}>
        <Text style={[textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    buttonView:{
        padding:10,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:25
    }
})