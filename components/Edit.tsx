import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Edit: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingBox}>
        <Text style={styles.heading}>Edit</Text>
      </View>

      <View style={styles.inputfields}>
        <TextInput
          style={styles.inputName}
          editable
          placeholder="abc"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.inputName}
          editable
          placeholder="123456789"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.inputName}
          editable
          placeholder="abc@gmail.com"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.inputName}
          editable
          placeholder="Confirm Your Password"
          placeholderTextColor="black"
        />
        <Text style={styles.inputName4}>
          <FontAwesome name="calendar" style={styles.icon} /> <Text> 01-01-2000</Text>
        </Text>
      </View>

      <View>
        <Text style={styles.btnsignup}>Save</Text>
      </View>

      <View style={styles.tab}>
        <FontAwesome name="home" style={styles.icons} />
        <FontAwesome name="heart" style={styles.icons} />
        <FontAwesome name="comment" style={styles.icons} />
        <FontAwesome name="user" style={styles.iconss} />
      </View>
    </View>
  );
};

export default Edit;

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
    marginTop: 100,
  },
  heading: {
    width: '100%',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  inputfields: {
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
  inputName4: {
    width: '100%',
    height: 50,
    fontWeight: '700',
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 13,
    paddingVertical: 12,
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: 10,
    margin: 10,
  },
  icon: {
    fontSize: 18,
    marginHorizontal: 20,
    color: '#FF6F61',
  },
  icons: {
    fontSize: 20,
    lineHeight: 60,
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
    marginTop: 210,
  },
  tab: {
    width: '95%',
    margin: 'auto',
    height: 60,
    borderRadius: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 120,
  },
  register: {
    textAlign: 'center',
    marginTop: 190,
  },
  iconss: {
    fontSize: 20,
    lineHeight: 60,
    color: '#FF6F61',
  },
});
