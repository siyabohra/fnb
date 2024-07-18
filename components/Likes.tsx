import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';

const imgblur = require('../assets/images/unsplash.png');

const Likes: React.FC = () => {
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
        <Text style={styles.innertext}>Likes</Text>
      </View>
      <View>
        <View style={styles.images}>
          <Image source={imgblur} style={styles.imgblur} />
          <Image source={imgblur} style={styles.imgblur} />
        </View>
        <View style={styles.images}>
          <Image source={imgblur} style={styles.imgblur} />
          <Image source={imgblur} style={styles.imgblur} />
        </View>
      </View>
      <View style={styles.tab}>
        <FontAwesome name='home' style={styles.icons} />
        <FontAwesome name='heart' style={styles.icons} />
        <FontAwesome name='comment' style={styles.iconss} />
        <FontAwesome name='user' style={styles.icons} />
      </View>
    </View>
  );
};

export default Likes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
    width: '100%',
    height: '100%',
  },
  text: {
    marginHorizontal: 'auto',
    marginVertical: 80,
  },
  innertext: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
  },
  images: {
    flexDirection: 'row',
    marginHorizontal: 'auto',
  },
  imgblur: {
    width: 140,
    margin: 10,
    height: 200,
    borderRadius: 10,
  },
  tab: {
    width: '88%',
    marginHorizontal: 'auto',
    height: 60,
    borderRadius: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 80,
  },
  icons: {
    fontSize: 20,
    lineHeight: 60,
  },
  iconss: {
    fontSize: 20,
    lineHeight: 60,
    color: '#FF6F61',
  },
});
