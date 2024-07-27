import { StyleSheet, Text, View,SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomHeader from '../component/common/CustomHeader'
import ButtonPrimary from '../component/common/ButtonPrimary'
import Colors from '../constant/Colors'

export default function BagScreen({navigation}) {
  return (
    <SafeAreaView>
     <View style={{flexDirection:'column'}}>
     <CustomHeader title="CART" navigation={navigation}/>
      <View>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyCartText}>Looks like your bag is empty!</Text>
          <Image style={styles.emptyCartImage} source={require('../assets/image/bag/bags.png')}/>
          <ButtonPrimary title="Continue Shopping" onPress={()=>{} } style={styles.button} textColor={Colors.whiteColor} backgroundColor={Colors.primaryColor} textStyle={styles.buttonText}/>
          <View>
            {/* <TouchableOpacity>
              <Text></Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button:{
    width:300,
    height:50
  },
  buttonText:{
    color:Colors.whiteColor,
    fontSize:20,
    fontWeight:'bold'
  },
  emptyContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:200
  },
  emptyCartImage:{
    height:200,
    width:200,
    marginTop:20,
    marginBottom:20
  },
  emptyCartText:{
    fontWeight:'bold',
    fontSize:20
  }
})