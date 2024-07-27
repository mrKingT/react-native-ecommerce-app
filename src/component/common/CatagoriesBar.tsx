import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

export default function CatagoriesBar() {
  return (
    <View style={styles.barContainer}>
        <ScrollView  horizontal>
            <View  style={styles.barItem}>
              <Text  style={styles.barItemText}>T-shirts</Text>
            </View>
            <View  style={styles.barItem}>
              <Text  style={styles.barItemText}>Crop tops</Text>
            </View>
            <View  style={styles.barItem}>
              <Text  style={styles.barItemText}>Blouses</Text>
            </View>
            <View  style={styles.barItem}>
              <Text  style={styles.barItemText}>Sleeveless</Text>
            </View>
            <View  style={styles.barItem}>
              <Text  style={styles.barItemText}>Knitwear</Text>
            </View>
        </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    barContainer:{
        backgroundColor:Colors.whiteColor,
        height:60,
        alignItems:'flex-start',
        justifyContent:'center',
        paddingTop:10,
        paddingLeft:10
    },
    barItem:{
        backgroundColor:Colors.blackColor,
        marginLeft:6,
        marginRight:7,
        alignSelf:'flex-start',
        borderRadius:20,
        color:Colors.whiteColor,
        alignItems:'center',
        justifyContent:'center'
    },
    barItemText:{
        color:Colors.whiteColor,
        marginHorizontal:10,
        alignContent:'center',
        fontSize:16,
        padding:10
    }
})