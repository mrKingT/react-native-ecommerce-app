import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

export default function ProfileItem({headingText,subHeadingText}) {
  return (
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>{headingText}</Text>
          <Text style={styles.subHeadingText}>{subHeadingText}</Text>
        </View>
        <Image style ={styles.forwordIcon} source={require('../../assets/icons/icon-farward-gray.png')}/>
      </View>
  )
}

const styles = StyleSheet.create({
  itemContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:10,
    height:80,
  },
  textContainer:{

  },
  forwordIcon:{
    height:15,
    width:10,
    marginRight:10
  },
  headingText:{
    fontSize:20,
    fontWeight:'600'
  },
  subHeadingText:{
    color:Colors.textGray
  }


})