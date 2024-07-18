import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const img = require('../assets/images/cuate.png')

const OnBoarding4: React.FC = () => {
  return (
    <View style={styles.container}>

        <Image source={img} style={styles.img}/>
        <View style={styles.textmain}>
            <Text style = {styles.heading}>Showcase your talents  
            </Text>
            <Text style = {styles.heading}>and expand your reach with 
            </Text>
            <Text style = {styles.heading}>F&B Social. 
            </Text>
        </View>
       
        <View>
            <Text style={styles.btnsignup}>Sign Up</Text>
        </View>
        
     
    </View>
  )
}

export default OnBoarding4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E1',
        width:'100%',
        height:'100%',
        margin:0,
        padding:0
    },
    img:{
        width:'60%',
        height:'50%',
        objectFit:'contain',
        marginHorizontal:'auto',
        marginTop:130
    },
    textmain:{
        width:'80%',
        height:'50%',
        marginHorizontal:'auto',
        marginTop:-50

    },
    heading:{
        color:'#FF6F61',
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        textAlign:'center',
        fontWeight:'bold'
  
    },
    btnsignup:{
        backgroundColor:'#FF6F61',
        width:300,
        padding:10,
        borderRadius:10,
        textAlign:'center',
        color:'white',
        fontWeight:'500',
        fontSize:18,
        marginHorizontal:'auto'
      }
})