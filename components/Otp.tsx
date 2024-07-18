import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'

const Otp: React.FC = () => {
  return (
    <View style={styles.container} >
        <View style= {styles.text}>
        <Text style = {styles.innertext}> 00:42</Text>
       
        <Text style={styles.subheading}>
            <View >
                <Text>Enter the verification </Text>
            </View>
            <View>
                <Text>code we </Text>
            </View>
            <View >
                <Text>  sent to your email  </Text>
            </View>
        </Text>
        </View>

        <View style={styles.otp}>
            <Text  style={styles.innerotp}>7</Text>
            <Text  style={styles.innerotp}>2</Text>
            <Text  style={styles.innerotp2}>0</Text>
            <Text  style={styles.innerotp3}>0</Text>
        </View>
        <View style={styles.keypad}>
            <View style={styles.inner1}>
                <Text style={styles.key}>1</Text>
                <Text style={styles.key}>2</Text>
                <Text style={styles.key}>3</Text>

            </View>
            <View style={styles.inner2}>
                <Text style={styles.key}>4</Text>
                <Text style={styles.key}>5</Text>
                <Text style={styles.key}>6</Text>

            </View>
            <View style={styles.inner3}>
                <Text style={styles.key}>7</Text>
                <Text style={styles.key}>8</Text>
                <Text style={styles.key}>9</Text>

            </View>
            <View style={styles.inner4}>
                <Text style={styles.key}></Text>
                <Text style={styles.zero}>0</Text>
                <Text >
                    <FontAwesome5  name='backspace' style={styles.icon} />
                </Text>

            </View>
        </View>
        <View >
        <Text style={styles.register}>Already have an Account?
          <Text style={styles.registertext}>Sign in</Text>
        </Text>
        </View>

    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5E1',
        width:'100%',
        height:'100%',
        margin:0,
        padding:0
    },
    text:{
        width:'100%',
        marginVertical:70
       },
    innertext:{
        width:100,
        fontFamily: 'Poppins-Regular',
        fontSize:30,
        fontWeight:'700',
        textAlign:'center',
        marginTop:26,
        marginHorizontal:'auto',
      
    },
    subheading:{
        width:180,
        fontFamily: 'Poppins-Regular',
        fontSize:14,
        textAlign:'center',
        marginTop:26,
        marginHorizontal:'auto',
     
       },
    otp:{
        flexDirection:'row',
        marginHorizontal:'auto'

    },
    innerotp:{
        width:65,
        height:65,
        borderRadius:15,
        margin:3,
        backgroundColor:'#FF6F61',
        textAlign:'center',
        lineHeight:60,
        fontFamily:'Poppins-Regular',
        fontWeight:'700',
        color:'white',
        fontSize:27
    },
    innerotp2:{
        width:65,
        height:65,
        borderRadius:15,
        margin:3,
        backgroundColor:'white',
        textAlign:'center',
        lineHeight:60,
        fontFamily:'Poppins-Regular',
        fontWeight:'700',
        color:'#FFC5C0',
        borderWidth:1,
        borderColor:'#FFC5C0',
        fontSize:27
    },
    innerotp3:{
        width:65,
        height:65,
        borderRadius:15,
        margin:3,
        backgroundColor:'white',
        textAlign:'center',
        lineHeight:60,
        fontFamily:'Poppins-Regular',
        fontWeight:'700',
        color:'#E8E6EA',
        fontSize:27
    },
    keypad:{
        width:'80%',
        marginHorizontal:'auto',
        marginVertical:40
    },
    inner1:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:'auto',
        marginVertical:20,
        
    },
    inner2:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:'auto',
        marginVertical:20,
    },
    inner3:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:'auto',
        marginVertical:20,
    },
    inner4:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:'auto',
        marginVertical:20,
    },
    key:{
        fontSize:25,
        fontFamily:'Poppins-Regular'
    },
    zero:{
        fontSize:25,
        fontFamily:'Poppins-Regular',
        marginLeft:23
    },
    icon:{
        fontSize:20,
    },
    registertext:{
        color:'#FF6F61',
        fontStyle:'italic'
    },
    register:{
        textAlign:'center',
     
      }

})