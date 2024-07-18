import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const fb = require('../assets/images/fb.png');
const google = require('../assets/images/google.png');
const apple = require('../assets/images/apple.png');

const Register: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/static/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/static/Inter-Regular.ttf'),
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.headingBox}>
        <Text style={styles.heading}>Create Your Account</Text>
        <Text style={styles.subheading}>
          Join the community that brings nightlife to life
        </Text>
      </View>

      <View style={styles.inputFields}>
        <TextInput
          style={styles.inputName}
          editable
          placeholder='Enter Your Email'
          placeholderTextColor='black'
        />
        <TextInput
          style={styles.inputName}
          editable
          placeholder='Enter Your Password'
          placeholderTextColor='black'
          secureTextEntry
        />
        <TextInput
          style={styles.inputName}
          editable
          placeholder='Confirm Your Password'
          placeholderTextColor='black'
          secureTextEntry
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.btnSignUp}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.text}>or continue with</Text>

      <View style={styles.icons}>
        <Image source={fb} style={styles.icon} />
        <Image source={google} style={styles.icon} />
        <Image source={apple} style={styles.icon} />
      </View>

      <Text style={styles.register}>
        Already have an Account?{' '}
        <Text style={styles.signIn}>Sign in</Text>
      </Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
  headingBox: {
    marginHorizontal: 'auto',
    marginTop: 100,
  },
  heading: {
    width: '100%',
    fontSize: 32,
    fontWeight: '700',
    color: '#FF6F61',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  subheading: {
    width: 300,
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 26,
  },
  inputFields: {
    width: 300,
    height: 157,
    marginTop: 65,
    marginHorizontal: 30,
  },
  inputName: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    margin: 10,
  },
  btnSignUp: {
    backgroundColor: '#FF6F61',
    width: 300,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    marginHorizontal: 'auto',
    marginTop: 80,
  },
  register: {
    textAlign: 'center',
    marginTop: 70,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginTop: 60,
    fontWeight: 'bold',
  },
  icons: {
    width: 200,
    height: 44,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius:22
  },
  signIn: {
    color: '#FF6F61',
    fontStyle: 'italic',
  },
});
