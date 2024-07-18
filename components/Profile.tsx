import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
const picture = require('../assets/images/photo.png')

const Profile: React.FC = () => {
    let [fontsLoaded] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Inter-Bold':require('../assets/fonts/static/Inter-Bold.ttf'),
        'Inter-Regular':require('../assets/fonts/static/Inter-Regular.ttf'),
      });
  return (
    <ScrollView style={styles.container} >
    <View style={styles.container}>
    <View style={styles.headingbox}>
 <Text style={styles.heading}>Profile details</Text>
     <View>

 <Image source={picture} style={styles.picture}/>

     </View>
     <View style={styles.account}>
        <Text style={styles.text}>Account Settings</Text>
        <TouchableOpacity>
            <Text style={styles.text1}>Edit</Text>
        </TouchableOpacity>
        
     </View>
     </View>
     <View style={styles.inputfields}>
          <TextInput
           style={styles.inputName}
           editable
           placeholder='abc '
           placeholderTextColor='black'
           />
             <TextInput
           style={styles.inputName}
           editable
           placeholder='123456789'
           placeholderTextColor='black'
          
           />
              <TextInput
           style={styles.inputName}
           editable
           placeholder='abc@gmail.com'
           placeholderTextColor='black'
          
           />
                <TextInput
           style={styles.inputName}
           editable
           placeholder='01-02-2000'
           placeholderTextColor='black'
          
           />
                  <TextInput
           style={styles.inputName}
           editable
           placeholder='male'
           placeholderTextColor='black'
          
           />
             
            
         
        </View>
        <View style={styles.account}>
        <Text style={styles.text}>Plan Settings</Text>
        
        
     </View>
    <View style={styles.inputfield}>
        <View style={styles.input}>
        <Text  >current plan</Text>
        <Text style={styles.free}>Free</Text>
        </View>
    
    </View>

    <View>

         <Text style={styles.btnsignup}>Logout</Text>

    </View>
  
    <View>

        <Text style={styles.btnsignup}>Delete Account</Text>

    </View>
    <View style={styles.tab}>
          <FontAwesome name='home' style={styles.icons}/>
          <FontAwesome name='heart' style={styles.icons}/>
          <FontAwesome name='comment' style={styles.iconss}/>
          <FontAwesome name='user' style={styles.icons}/>
        </View>


</View>
</ScrollView>

  )
}

export default Profile

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
        marginTop:100

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
    account:{
        width:'77.5%',
        marginHorizontal:'auto',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10
    },
    text:{
        fontFamily: 'Poppins-Regular',
        fontWeight:"700",
        fontSize:18
  
    },
    text1:{
        fontFamily: 'Poppins-Regular',
        fontSize:14,
        color:'#FF6F61',
        fontWeight:"700"
    },
    inputfields:{
        width:300,
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
      inputfield:{
        width:300,
        marginHorizontal:30,
       
        
    },
    input:{
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        flexDirection:'row',
        borderRadius: 5,
        justifyContent:'space-between',
        paddingHorizontal: 13,
        paddingVertical:12,
        fontSize: 16,
        margin:10,
        textAlign:'left',

    },
    free:{
        color:'#247DCF'
    },
    btnsignup:{
        backgroundColor:'#FF6F61',
        width:'82%',
        padding:10,
        borderRadius:10,
        textAlign:'center',
        color:'white',
        fontWeight:'500',
        fontSize:18,
        marginHorizontal:'auto',
        marginTop:20
      },
      tab:{
        width:'83%',
        margin:'auto',
        height:60,
        borderRadius:16,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:50,
        marginBottom:10
     
    
      },
      icons:{
        fontSize:20,  
        lineHeight:60
      },
      iconss:{
        fontSize:20,  
        lineHeight:60,
        color:'#FF6F61'
      },



})
