import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
const picture = require('../assets/images/photo.png')

const Profiledetails: React.FC = () => {
  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Inter-Bold':require('../assets/fonts/static/Inter-Bold.ttf'),
    'Inter-Regular':require('../assets/fonts/static/Inter-Regular.ttf'),
  });
  return (
    <View style={styles.container}>
    <View style={styles.headingbox}>
 <Text style={styles.heading}>Profile details</Text>
 <View>

 <Image source={picture} style={styles.picture}/>

 </View>
     </View>
     <View style={styles.inputfields}>
          <TextInput
           style={styles.inputName}
           editable
           placeholder='Enter your first name '
           placeholderTextColor='black'
           />
             <TextInput
           style={styles.inputName}
           editable
           placeholder='Enter your last name'
           placeholderTextColor='black'
          
           />
              <TextInput
           style={styles.inputName}
           editable
           placeholder='Select your gender'
           placeholderTextColor='black'
          
           />
              <Text style={styles.inputName4}><FontAwesome name='calendar' style={styles.icon}/>  <Text >Choose your birthday date</Text> </Text>
            
         
        </View>
 <View>

         <Text style={styles.btnsignup}>Continue</Text>

 </View>

</View>

  )
}

export default Profiledetails

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
    picture:{
        width:100,
        marginHorizontal:'auto',
        marginVertical:30
    },
    inputfields:{
        width:300,
        height:157,
       marginHorizontal:30,
      
    },
    inputName:{
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 13,
        paddingVertical:12,
        fontSize: 16,
        margin:10,
        textAlign:'left',
      
      },
      inputName2:{
        width: '100%',
        height: 50,
        backgroundColor: '#FF6F61',
        borderRadius: 5,
        paddingHorizontal: 13,
        paddingVertical:12,
        fontSize: 16,
        margin:10,
        color:'white',
        textAlign:'left',
     
      },
      inputName4:{
        width: '100%',
        height: 50,
        color:'#FF6F61',
        fontWeight:'700',
        backgroundColor: '#FFF',
        borderRadius: 5,
        paddingHorizontal: 13,
        paddingVertical:12,
        fontSize: 16,
        margin:10,
        textAlign:'left',
        paddingLeft:10
        
      },
  
    icon:{
      fontSize:18,
      marginHorizontal:10
    }  ,
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
        marginTop:200
      },
      register:{
        textAlign:'center',
        marginTop:190
      }

})
