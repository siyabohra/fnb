import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
const sidebar = require('../assets/images/Icon.png');
const arrow = require('../assets/images/Vector2.png');



const Match: React.FC = () => {
    let [fontsLoaded] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Inter-Bold':require('../assets/fonts/static/Inter-Bold.ttf'),
        'Inter-Regular':require('../assets/fonts/static/Inter-Regular.ttf'),
      });
  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.arrbg}><Image source={arrow} style={styles.imgarr}/></View>  
            <Text style= {styles.match}>Matches</Text>
            <View style={styles.arrbg}><Image source={sidebar} style={styles.imgarr}/></View>  
        </View>
        <View style={styles.story}>

        </View>
      
    </View>
  )
}

export default Match

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E1',
        width:'100%',
        height:'100%',
        margin:0,
        padding:0
    },
    navbar:{
      flexDirection:'row',
      width:'80%',
      justifyContent:'space-between',
      marginHorizontal:'auto',
      marginVertical:50  
    },
    arrbg:{
        width:44,
        height:44,
        backgroundColor:'white',
        borderRadius:22,
        elevation:5

    },
    imgarr:{
       marginHorizontal:'auto',
       marginVertical:'auto'
    },
    match:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:7,
        fontFamily:'Poppins-Bold'
    },
    story:{
        width:'40%',
        borderColor:'black',
        borderWidth:1,
        marginHorizontal:40
    }
})