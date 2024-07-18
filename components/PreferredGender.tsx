import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { useFonts } from 'expo-font';
const tick = require('../assets/images/Vector.png')

const PreferredGender: React.FC = () => {
  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Inter-Bold':require('../assets/fonts/static/Inter-Bold.ttf'),
    'Inter-Regular':require('../assets/fonts/static/Inter-Regular.ttf'),
  });
  return (
    <View style={styles.container}>
           <View style={styles.headingbox}>
        <Text style={styles.heading}>Preferred gender</Text>
        <View>
      
        <Text style={styles.subheading}>
            <Text >Choose the gender you’d like to </Text>
            <Text >connect with for unforgettable nights in the</Text>  
            <Text >F&B scene.</Text>
        </Text>
       
        </View>
            </View>
            
        <View style={styles.inputfields}>

          <View style={styles.inputName}>
            <Text>Woman</Text> 
            <Image source={tick} style={styles.icon1} />  
          </View>

          <View style={styles.inputName2}>
            <Text >Man</Text>  
            <Image source={tick}  style={styles.icon2}/>
          </View>

          <View style={styles.inputName}>
            <Text>Non-binary</Text>
            <Image source={tick}  style={styles.icon3}/>
          </View>

          <View style={styles.inputName}>
            <Text>Prefer not to say</Text>
          <Image source={tick}  style={styles.icon4}/>
          </View>

        </View>
        <View>
       
                <Text style={styles.btnsignup}>Continue</Text>
    
        </View>

    </View>
    
  
  )
}

export default PreferredGender

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E1',
        width:'100%',
        height:'100%',
        margin:0,
        padding:0
    },
    headingbox:{
        width:'100%',
        marginHorizontal:'auto',
        marginTop:160

    },
    heading:{
        width:'100%',
        fontSize: 32,
        fontWeight:'700',
        fontFamily: 'Poppins-Bold',
        textAlign:'center',
       
    },
    subheading:{
     width:250,
     fontFamily: 'Poppins-Regular',
     fontSize:14,
     textAlign:'center',
     marginTop:26,
     marginHorizontal:'auto',
  
    },
    inputfields:{
        width:300,
        height:287,
       marginTop:55,
       marginHorizontal:30,
      
    },
    inputName:{
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 16,
        textAlign:'left',
        flex:1,
        flexDirection:'row',
        margin:10,
        paddingHorizontal:10,
        paddingVertical:15
      
      },
      inputName2:{
        width: '100%',
        height: 50,
        backgroundColor: '#FF6F61',
        borderRadius: 5,
        fontSize: 16,
        color:'white',
        textAlign:'left',
        flex:1,
        flexDirection:'row',
        margin:10,
        paddingHorizontal:10,
        paddingVertical:15
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
        marginTop:80
      },
      icon1:{
        marginLeft:200,
        marginTop:5
      },
      icon2:{
        marginLeft:215
      },
      icon3:{
        marginLeft:176
      },
      icon4:{
        marginLeft:140
      }
   
})