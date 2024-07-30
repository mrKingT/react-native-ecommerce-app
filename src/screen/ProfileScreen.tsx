import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../component/common/CustomHeader'
import Colors from '../constant/Colors'
import ProfileItem from '../component/profile/ProfileItem'

export default function ProfileScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomHeader title='' navigation={navigation}/>
      <View style={styles.screenContainer}>
        <View>
          <Text style={styles.headingText}>My profile</Text> 
        </View>
        <View style={styles.imageNameContainer}>
          <Image style={styles.profileImage} source={require('../assets/image/profile/profile-image.png')}/>
          <View style={styles.nameEmailContainer}>
            <Text style={styles.nameText}>Matilda Brown</Text>
            <Text style={styles.emailText}>matildabrown@mail.com</Text>
          </View>
        </View>  
      </View> 
      <ScrollView style={styles.scrollContainer}>
        <ProfileItem headingText={'My orders'} subHeadingText={'Already have 12 orders'}/>
        <ProfileItem headingText={'Shipping addresses'} subHeadingText={'3 ddresses'}/>
        <ProfileItem headingText={'Payment methods'} subHeadingText={'Visa  **34'}/>
        <ProfileItem headingText={'Promocodes'} subHeadingText={'You have special promocodes'}/>
        <ProfileItem headingText={'My reviews'} subHeadingText={'Reviews for 4 items'}/>
        <ProfileItem headingText={'Settings'} subHeadingText={'Notifications, password'}/>
      </ScrollView>
      
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  screenContainer:{
    backgroundColor:Colors.primaryBackgroundColor,
    paddingHorizontal:15,
    height:150
  },
  headingText:{
    fontSize:40,
    fontWeight:'bold'
  },
  profileImage:{
    height:80,
    width:80,
    borderRadius:40
  },
  imageNameContainer:{
    flexDirection:'row',
    marginTop:20
  },
  nameEmailContainer:{
    paddingHorizontal:10,
    justifyContent:'flex-start'
  },
  nameText:{
    fontSize:25,
    fontWeight:'600'
  },
  emailText:{
    color:Colors.textGray
  },
  itemSeprator:{
    // borderBottomColor: Colors.textGray,
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  safeAreaView:{
    flex:1
  },
  scrollContainer:{
    flex:1,
    paddingHorizontal:15
  }

})