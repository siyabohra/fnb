import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const date = require('../assets/images/dating.png')
const dots = require('../assets/images/Framedots.png')
const line1 = require('../assets/images/Vector31.png')
const line2 = require('../assets/images/Vector30.png')
const line3 = require('../assets/images/Vector29.png')

const OnBoarding1: React.FC = () => {
  return (
    <View style={styles.container}>
         <Image source={line1} style={styles.lineone}/>
         <Image source={line2} style={styles.linetwo}/>
         <Image source={line3} style={styles.linethree}/>
        <Image source={date} style={styles.dateimg} />
        <Text style = {styles.heading}>Welcome to 
        </Text>
        <Text style = {styles.heading}>F&B Social</Text>

        <View style={styles.dotsimg}>
            <Image source={dots} style={styles.img}/>
        </View>
     
    </View>
  )
}

export default OnBoarding1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E1',
        width:'100%',
        height:'100%',
        margin:0,
        padding:0
    },
    dateimg:{
        width:320,
        height:320,
        marginHorizontal:'auto',
        marginTop:170,
        objectFit:'contain'

    },
    heading:{
        color:'#FF6F61',
        fontSize: 40,
        fontFamily: 'Poppins-Bold',
        textAlign:'center',
        fontWeight:'bold'
  
    },
    dotsimg: {
        marginHorizontal:'auto',
        marginTop:100
    }
    ,
      img:{
        width: 50,
        height: 30,
        objectFit:'contain'
      },
      lineone:{
        width:160,
        height:400,
        position:'absolute',
        top:-100,
        objectFit:"contain",
        left:0,
      },
      linetwo:{
        width:140,
        height:400,
        position:'absolute',
        top:20,
        objectFit:"contain",
        right:0,
      },
      linethree:{
        width:310,
        height:400,
        position:'absolute',
        bottom:-137,
        objectFit:"contain",
        right:90,

      }
})