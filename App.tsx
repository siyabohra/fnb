import React from 'react';
import { StyleSheet, View } from 'react-native';
import Edit from "./components/Edit";
// import EnableNotification from "./components/EnableNotification";
// import HomeScreen from "./components/HomeScreen";
// import IAm from "./components/IAm";
// import Likes from "./components/Likes";
// import Location from "./components/Location";
// import LogIn from "./components/LogIn";
// import LoginScreen2 from "./components/LoginScreen2";
// import Match from "./components/Match";
// import Message from "./components/Message";
// import OnBoarding1 from "./components/OnBoarding1";
// import OnBoarding4 from "./components/OnBoarding4";
// import OnboardingScreen from "./components/OnboardingScreen";
// import Otp from "./components/Otp";
// import PreferredGender from "./components/PreferredGender";
// import Profile from "./components/Profile";
// import Profiledetails from "./components/Profiledetails";
// import Register from "./components/Register";
// import SplashScreen from "./components/SplashScreen";
import UploadPicture from "./components/UploadPicture";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
{/*      
      <SplashScreen /> */}
      {/* <OnboardingScreen /> */}
      {/* <LogIn /> */}
      {/* <LoginScreen2 /> */}
      {/* <Register /> */}
      {/* <PreferredGender /> */}
      {/* <Profiledetails /> */}
      {/* <Edit /> */}
      <UploadPicture />
      {/* <Message /> */}
      {/* <Location /> */}
      {/* <EnableNotification /> */}
      {/* <Likes /> */}
      {/* <Profile /> */}
      {/* <IAm /> */}
      {/* <Otp /> */}
      {/* <HomeScreen /> */}
      {/* <Match /> */}
      {/* <OnBoarding1 /> */}
      {/* <OnBoarding4 /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5E1',
  },
});
