import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const location = require('../assets/images/a.png');

const Location: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={location} style={styles.locimg} />
      </View>
      <View style={styles.headingbox}>
        <Text style={styles.heading}>Enable your location</Text>
        <View>
          <Text style={styles.subheading}>
            Share your location to connect with 
            people nearby
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.btnsignup}>Allow Location Access</Text>
      </View>
      <View>
        <Text style={styles.location}>Enter Location Manually</Text>
      </View>
    </View>
  );
}

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    fontFamily: 'Poppins-Bold',
  },
  locimg: {
    width: '57%',
    height: 157,
    marginTop: 170,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  headingbox: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  heading: {
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF6F61',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  subheading: {
    width: 300,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 26,
    alignSelf: 'center',
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
    alignSelf: 'center',
    marginTop: 70,
  },
  location: {
    width: 200,
    alignSelf: 'center',
    marginVertical: 70,
    color: '#FF6F61',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },
});
