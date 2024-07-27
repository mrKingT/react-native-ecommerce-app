import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import CustomHeader from '../component/common/CustomHeader'
import ButtonPrimary from '../component/common/ButtonPrimary'
import Colors from '../constant/Colors'

export default function FavoritesScreen({navigation}) {
  return (
    <SafeAreaView>
     <View style={{flexDirection:'column'}}>
     <CustomHeader title="FAVORITES" navigation={navigation}/>
      <View>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyCartText}>If you are not signed in, your lists are only available on this device and will expire at the end of this session.</Text>
          <ButtonPrimary title="START ADDING ITEMS" onPress={()=>{} } style={styles.button} textColor={Colors.whiteColor} backgroundColor={Colors.primaryColor} textStyle={styles.buttonText}/>
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
  emptyCartText:{
    fontWeight:'500',
    fontSize:18,
    marginHorizontal:25,
    marginBottom:20
  }
})