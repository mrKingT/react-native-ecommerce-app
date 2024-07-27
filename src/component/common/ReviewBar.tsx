import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

export default function ReviewBar({review,count}) {
    let content

    switch(review){
        case 1:
            content = (<View style={styles.barContainer}>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-inactive.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-inactive.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-inactive.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-inactive.png')} style={styles.starIcon}/>
                <Text style={styles.reviewCount}>({count})</Text>
            </View>)
        break
        case 2:
            content = (<View style={styles.barContainer}>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-inactive.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-inactive.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-inactive.png')} style={styles.starIcon}/>
                <Text style={styles.reviewCount}>({count})</Text>
            </View>)
        break
        case 3:
            content = (<View style={styles.barContainer}>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-inactive.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-inactive.png')} style={styles.starIcon}/>
                <Text style={styles.reviewCount}>({count})</Text>
            </View>)
        break
        case 4:
            content = (<View style={styles.barContainer}>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-inactive.png')} style={styles.starIcon}/>
                <Text style={styles.reviewCount}>({count})</Text>
            </View>)
        break
        case 5:
            content = (<View style={styles.barContainer}>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Image source={require('../../assets/icons/star-activated.png')} style={styles.starIcon}/>
                <Text style={styles.reviewCount}>({count})</Text>
            </View>)
        break

    }
  return (<View style={styles.reviewContainer}>{content}</View>
  )
}

const styles = StyleSheet.create({
    starIcon:{
        height:18,
        width:18
    },
    barContainer:{
        flex:1,
        flexDirection:'row'
    },
    reviewContainer:{
        marginTop:10
    },
    reviewCount:{
        fontSize:12,
        color:Colors.textGray
    }
})