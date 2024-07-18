import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';

const headerHeading = require('../assets/images/Header.png');

const LogIn: React.FC = () => {
  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/static/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/static/Inter-Regular.ttf'),
  });


  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 'auto', marginTop: 100 }}>
        <Text style={styles.heading}>Welcome Back</Text>
        <View>
          <Text style={styles.subheading}>Good to see you again!</Text>
          <Text style={styles.subheading2}>Log in to continue the fun.</Text>
        </View>
      </View>

      <View style={styles.inputfields}>
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
      </View>
      
      <View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Your Password?</Text>
        </TouchableOpacity>
      </View>
      
      <View>
        <TouchableOpacity>
          <Text style={styles.btnsignup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      
      <View>
        <Text style={styles.register}>
          Don’t have an Account? 
          <Text style={{ color: '#FF6F61', fontStyle: 'italic', fontWeight: '600' }}> Register</Text>
        </Text>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
    width: '100%',
    height: '100%'
  },
  heading: {
    width: 300,
    fontSize: 37,
    fontWeight: '700',
    color: '#FF6F61',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  subheading: {
    width: '100%',
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 26
  },
  subheading2: {
    width: 300,
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  inputfields: {
    width: 300,
    height: 157,
    marginTop: 65,
    marginHorizontal: 30
  },
  inputName: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    margin: 10
  },
  forgot: {
    width: 300,
    marginVertical: 10,
    textAlign: 'right',
    marginLeft: 30,
    fontWeight: '600'
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
    marginTop: 30
  },
  register: {
    textAlign: 'center',
    marginTop: 190
  }
});
