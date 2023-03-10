

import React,{useEffect} from 'react';
import {StatusBar} from 'react-native';
import { Button } from 'react-native-paper';
import { COLORS_PRIMARY } from './src/configs/theme';
import RootNavigation from './src/navigation/RootNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const loginHandle = () => {
    console.log('login');
  };

  useEffect(()=>{
    // SplashScreen.show()
    // SplashScreen.hide()
  },[])
  return (
    <>
      <StatusBar backgroundColor={COLORS_PRIMARY} barStyle="dark-content" />
      <RootNavigation />
    
    
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
    </>
  );
};
export default App;
