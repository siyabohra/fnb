import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
const img = require('../assets/images/Rectangle.png')
const frame = require('../assets/images/Frame.png')

const UploadPicture: React.FC = () => {
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
    <View >
        <Text>We'd love to see you.  </Text>
    </View>
    
    <View>
        <Text>Upload a photo to enhance your profile  </Text>
    </View>
    <View >
        <Text>  and make connections. </Text>
    </View>
 </Text>

 </View>
     </View >
     <View style={styles.imgcon}>
     <View style= {styles.picture}>
            <View>
                <Image source={img} style={styles.image} />
            </View>
           
            <View>
                <Image source={frame} style={styles.frames} />
                <Image source={frame} style={styles.frames} />
                <Image source={frame} style={styles.frames} />
            </View>
            
        </View>

        <View style={styles.frames2}>
            <Image source={frame} style={styles.frames} />
            <Image source={frame} style={styles.frames} />
        </View>
          

     </View>
      
    
     <View>
       
       <Text style={styles.btnsignup}>Continue</Text>

</View>

</View>
  )
}

export default UploadPicture

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
     width:100,
     fontFamily: 'Poppins-Regular',
     fontSize:14,
     textAlign:'center',
     marginTop:26,
     marginHorizontal:'auto',
  
    },
    

    imgcon:{
        width:'100%',
        marginHorizontal:10
    },
    picture:{
        width:'80%',
        marginHorizontal:'auto',
        marginTop:50,
        height:200,
        flexDirection:'row'
    },
    image:{
        width:180,
        marginHorizontal:5,
        objectFit:'cover',
        height:180,
        borderRadius:15,
        marginTop:10
    },
    frames:{
        width:80,
        height:80,
        objectFit:"cover",
        marginVertical:10,
        marginHorizontal:15
    },
    frames2:{
        flexDirection:'row',
        marginLeft:15
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
   
})

