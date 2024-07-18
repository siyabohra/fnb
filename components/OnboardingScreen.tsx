import {  Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';



const logo = require('../assets/images/6.png');
const dot1 = require('../assets/images/dot1.png');
const signUpBtn = require('../assets/images/Button.png');
const fb = require('../assets/images/fb.png');
const google = require('../assets/images/google.png');
const apple = require('../assets/images/apple.png');


const OnboardingScreen: React.FC = () => {

    let [fontsLoaded] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Inter-Bold':require('../assets/fonts/static/Inter-Bold.ttf'),
        'Inter-Regular':require('../assets/fonts/static/Inter-Regular.ttf'),
      });
  return (
    <View style={styles.container}>
        <Text style = {styles.heading}>F&B Social</Text>
        <View>
            <Image source={logo} style={styles.logoimg}/>
        </View>
        <View style={{marginTop:18}}>
            <Text style={styles.subheading}>Bringing People Together, 
            Night After Night</Text>
        </View>
        {/* <View style={{width:393,height:40,flexDirection:'row'}}>
            <View style={styles.pagecontrols}>
                <Image source={dot1} style={styles.dot}/>
                <Image source={dot1} style={styles.dot}/>
            </View>
        </View> */}
        <View>
        <View >
              <TouchableOpacity>
                <Text style={styles.btnsignup}>I’m new here</Text>
              </TouchableOpacity>
               <TouchableOpacity>
                <Text style={styles.btnsignup2}>I’ve been here before</Text>
              </TouchableOpacity>

          
        </View>
        </View>
        {/* <View>
           <Text style={{textAlign:'center',fontFamily:'Poppins-Regular',marginVertical:22,fontWeight:'semi-bold'}}>or continue with</Text>
        </View> */}
        {/* <View style={styles.icons}>
            <Image source={fb}/>
            <Image source={google}/>
            <Image source={apple}/>
        </View> */}
        <View >
            <Text style={{textAlign:'center',marginTop:60}}>By continuing you agree to our
            </Text>
            <Text style={{color:'#FF6F61',fontWeight:'700',textAlign:'center',marginTop:4,fontStyle:'italic'}}>
                Terms of Service <Text style={{color:'black',fontWeight:'700',textAlign:'center',marginTop:4}}>and</Text> Privacy Policy
            </Text>
        </View>
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E1',
        width:'100%',
        height:'100%',
        margin:0,
        padding:0
    },
    heading:{
      color:'#FF6F61',
      fontSize: 34,
      fontFamily: 'Poppins-Bold',
      textAlign:'center',
      marginTop:100,  
      fontWeight:'700'

    },
    logoimg:{
        width:175,
        height:152.38,
       marginHorizontal:105,
       marginVertical:15
    },
    subheading:{
        width:320,
        height:62,
        fontSize:23,
        fontWeight:'700',
        lineHeight:29.05,
        fontFamily:'Inter-Regular',
        textAlign:'center',
        marginLeft:39,
    },
    pagecontrols: {
        width: 48,
        height: 24,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 8,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:170,
        marginTop:20
      
    },
    dot: {
        width: 8,
        height: 8, 
        marginHorizontal: 4, 
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
        marginHorizontal:'auto',
        marginTop:130,
        elevation: 4,
      },
    btnsignup2:{
        backgroundColor:'#FF6F61',
        width:300,
        padding:10,
        borderRadius:10,
        textAlign:'center',
        color:'white',
        fontWeight:'500',
        fontSize:18,
        marginHorizontal:'auto',
        marginTop:20,
        elevation: 4,
    },
    icons:{
        width:200,
        height:44,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal:'auto',
      
    }
})
