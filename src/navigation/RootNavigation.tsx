import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SignUpScreen } from '../screens/SignUpScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RootStackParamList } from '../configs/common';
import {SCREEN} from '../configs/screens'

const Stack = createNativeStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName={SCREEN.LOGIN}>
        <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen}></Stack.Screen>
        <Stack.Screen name={SCREEN.SIGNUP} component={SignUpScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
