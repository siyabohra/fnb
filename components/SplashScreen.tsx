import React from "react";
import { View,Image } from "react-native";
const logo = require('../assets/images/6.png')


const SplashScreen: React.FC =  ()=>{
    return (
        <View style={{flex:1,width:430,height:932,backgroundColor:'#FFF5E1'}}>
               <Image source={logo} style={{width:212.7,height:206.92,marginTop:319,marginLeft:87}} />
        </View>
    )

}

export default SplashScreen