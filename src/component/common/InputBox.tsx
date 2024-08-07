import { StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React, {useState} from 'react'
import Colors from '../../constant/Colors'

type InputProps={
    label:string
    placeHolder:string
    validate:(text:String)=>{}
}


export default function InputBox(props:InputProps) {
const[text,setText] =useState('')
const[validEmail,setValidEmail] = useState(false)
  return (
    <View style={styles.inputBoxContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.lableText}>{props.label}</Text>
          <TextInput 
            style={styles.input}
            defaultValue={text}
            onChangeText={newText=> setValidEmail(props.validate(newText))}
          />
        </View>
        <Image style={[styles.iconCheck, {display:validEmail?'flex':'none'}]} source={require('../../assets/icons/icon-check-green.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        height:40,
        padding:10,
    },
    inputBoxContainer:{
        height:60,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        elevation:1,
        borderRadius:5,
        backgroundColor:Colors.whiteColor,
        marginVertical:10
    },
    iconCheck:{
        height:30,
        width:30,
        alignItems:'center',
        justifyContent:'center',
        display:'flex'
    },
    inputContainer:{
        flexDirection:'column',
        flex:1
    },
    lableText:{
        color:Colors.textGray
    }
})