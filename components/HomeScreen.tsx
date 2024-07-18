import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const card = require('../assets/images/Card1.png');
const dislike = require('../assets/images/dislike.png');
const like = require('../assets/images/like.png');
const flower = require('../assets/images/flower.png');
const heart = require('../assets/images/Heart.png');
const discovery = require('../assets/images/Discovery.png');
const home = require('../assets/images/Home.png');
const user = require('../assets/images/user.png');
const msg = require('../assets/images/msg.png');

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={card} style={styles.bg} resizeMode="cover">
        <View style={styles.text}>
          <View style={styles.innertext1}>
            <Image source={like} style={styles.innericon1} />
          </View>
          <View style={styles.innertext2}>
            <Image source={flower} style={styles.innericon2} />
          </View>
          <View style={styles.innertext3}>
            <Image source={dislike} style={styles.innericon3} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.tab}>
        <Image source={home} style={styles.img} />
        <Image source={discovery} style={styles.img} />
        <Image source={msg} style={styles.img} />
        <Image source={heart} style={styles.img} />
        <Image source={user} style={styles.img} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
  },
  bg: {
    flex: 1,
    width: '96%',
    height: '86%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginTop: 30,
  },
  text: {
    flexDirection: 'row',
    width: 300,
    position: 'relative',
  },
  innertext1: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    width: 72,
    height: 72,
    position: 'absolute',
    top: 250,
    right: 220,
    borderRadius: 50,
  },
  innertext2: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    width: 98,
    height: 98,
    position: 'absolute',
    top: 245,
    left: 91,
    borderRadius: 50,
  },
  innertext3: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    width: 72,
    height: 72,
    position: 'absolute',
    top: 250,
    left: 210,
    borderRadius: 50,
  },
  innericon1: {
    width: 34,
    height: 34,
    alignSelf: 'center',
  },
  innericon2: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  innericon3: {
    width: 34,
    height: 34,
    alignSelf: 'center',
  },
  tab: {
    width: '100%',
    height: 55,
    borderRadius: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  img: {
    width: 23,
    height: 23,
  },
});
