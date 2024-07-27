import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonPrimary from '../common/ButtonPrimary'
import Colors from '../../constant/Colors'

export default function HeroSection({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover'style={styles.backgroungImg} source={require('../../assets/image/home/home-hero-bg.png')}>
      <View>
       <Image style={styles.fashionSaleImg} source={require('../../assets/image/home/fashion-sale.png')}/>
       <ButtonPrimary title="check" onPress={()=>navigation.navigate('Shop') } style={styles.button} textColor={Colors.whiteColor} backgroundColor={Colors.primaryColor} textStyle={styles.buttonText}/>
      </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:550
    },
    backgroungImg:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    fashionSaleImg:{
        height:200,
        width:200,
        marginLeft:10,
        resizeMode:'contain'
    },
    button:{
        marginBottom:35,
        marginLeft:10,
        width:160,
        height:50
    },
    buttonText:{
        fontWeight:'400',
        color:Colors.whiteColor,
        fontSize:19
    }
})