import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-elements'
import { useFonts } from 'expo-font'
import { FontAwesome } from '@expo/vector-icons'
const ProfileImage = require('../assets/images/Profile.png')

const Message: React.FC = () => {
  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Inter-Bold':require('../assets/fonts/static/Inter-Bold.ttf'),
    'Inter-Regular':require('../assets/fonts/static/Inter-Regular.ttf'),
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchbar}>
          <SearchBar
            placeholder="Search"
            round
            containerStyle={styles.innerSearchbar}
            inputContainerStyle={styles.transparentBackground}
          />
        </View>
        <View style={styles.messageContainer}>
          <Image source={ProfileImage } style={styles.imgprofile}/>
          <View style={styles.alltext}>
              <View>
                  <Text style={styles.text1}>Karolina</Text>
              </View>
              <View>
                  <Text style={styles.text2}>how about today ?</Text>
              </View>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image source={ProfileImage } style={styles.imgprofile}/>
          <View style={styles.alltext}>
              <View>
                  <Text style={styles.text1}>Karolina</Text>
              </View>
              <View>
                  <Text style={styles.text2}>how about today ?</Text>
              </View>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image source={ProfileImage } style={styles.imgprofile}/>
          <View style={styles.alltext}>
              <View>
                  <Text style={styles.text1}>Karolina</Text>
              </View>
              <View>
                  <Text style={styles.text2}>how about today ?</Text>
              </View>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image source={ProfileImage } style={styles.imgprofile}/>
          <View style={styles.alltext}>
              <View>
                  <Text style={styles.text1}>Karolina</Text>
              </View>
              <View>
                  <Text style={styles.text2}>how about today ?</Text>
              </View>
          </View>
        </View>
        <View style={styles.messageContainer}>
          <Image source={ProfileImage } style={styles.imgprofile}/>
          <View style={styles.alltext}>
              <View>
                  <Text style={styles.text1}>Karolina</Text>
              </View>
              <View>
                  <Text style={styles.text2}>how about today ?</Text>
              </View>
          </View>
        </View>
        
        <View style={styles.tab}>
          <FontAwesome name='home' style={styles.icons}/>
          <FontAwesome name='heart' style={styles.icons}/>
          <FontAwesome name='comment' style={styles.iconss}/>
          <FontAwesome name='user' style={styles.icons}/>
        </View>
      </View>
    </>
  )
}

export default Message

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    fontFamily:'Poppins-Bold'
  },
  searchbar: {
    width: '90%',
    height:20,
    padding:0,
    marginHorizontal: 'auto',
    marginVertical: 50,
    borderRadius: 50,
    fontFamily:'Poppins-Bold'
  },
  innerSearchbar: {
    backgroundColor: '#F0EADE', 
    borderRadius: 20,
    borderTopWidth: 0, 
    borderBottomWidth: 0,
    fontFamily:'Poppins-Bold'
  },
  transparentBackground: {
    backgroundColor: 'transparent'
  },
  messageContainer: {
    flexDirection: 'row',
    width:'90%',
    height: 80,
    marginHorizontal:30,
    marginVertical:15,
    fontFamily:'Poppins-Bold',

  },
  imgprofile:{
    width:80,
    height:80
  },
  alltext:{
    width:'72%',
    marginHorizontal:10,
    borderBottomWidth:1,
    borderBottomColor:'gray'
  },
  text1:{
    fontSize: 20,
    color: '#000000',
    fontWeight:'800',
    marginHorizontal:10,
    marginVertical:5,
    fontFamily:'Poppins-Regular'
  },
  text2:{
    fontSize: 15,
    color: '#000000',
    fontWeight:'300',
    marginHorizontal:10,
    fontFamily:'Poppins-Regular'
  },
  tab:{
    width:'95%',
    margin:'auto',
    height:60,
    borderRadius:16,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:50
 

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
