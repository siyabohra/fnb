import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const chat = require('../assets/images/chats.png');

const EnableNotification: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={chat} style={styles.locimg} />
      </View>
      <View style={styles.headingbox}>
        <Text style={styles.heading}>Enable Notifications</Text>
        <View>
          <Text style={styles.subheading}>
            Stay connected with real-time updates on matches and messages.
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.btnsignup}>Continue</Text>
      </View>
    </View>
  );
};

export default EnableNotification;

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
    width: '55%',
    height: 200,
    marginTop: 170,
    objectFit: 'cover',
    marginHorizontal: 'auto',
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
    marginHorizontal: 12,
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
    marginTop: 190,
  },
});
