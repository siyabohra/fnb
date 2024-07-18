import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const tick = require('../assets/images/Vector.png');
const smalltick = require('../assets/images/chpng.png');

const IAm: React.FC = () => {
  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/static/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/static/Inter-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.innertext}> I am a</Text>
      </View>
      <View style={styles.inputfields}>
        <View style={styles.inputName}>
          <Text>F&B Entertainer</Text>
          <Image source={tick} style={styles.icon1} />
        </View>
        <View style={styles.inputName2}>
          <Text>Nightlife Enthusiast </Text>
          <Image source={smalltick} style={styles.icon2} />
        </View>
      </View>
      <View>
        <Text style={styles.btnsignup}>Continue</Text>
      </View>
    </View>
  );
};

export default IAm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
  text: {
    width: '100%',
    marginHorizontal: 30,
    marginVertical: 100,
  },
  innertext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    fontWeight: '700',
  },
  inputfields: {
    width: 300,
    height: 150,
    marginTop: 55,
    marginHorizontal: 30,
  },
  inputName: {
    width: '100%',
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    fontSize: 16,
    textAlign: 'left',
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  inputName2: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF6F61',
    borderRadius: 15,
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  icon1: {
    marginTop: 7,
  },
  icon2: {
    marginTop: 2,
  },
  btnsignup: {
    backgroundColor: '#FF6F61',
    width: 300,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    marginHorizontal: 'auto',
    marginTop: 260,
  },
});
