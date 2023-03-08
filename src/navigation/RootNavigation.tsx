import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpScreen} from '../screens/SignUpScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {PolicySrceen} from '../screens/PolicyScreen';
import {FarmListScreen} from '../screens/FarmListScreen';
import MainTab from './MainTab';
import {RootStackParamList} from '../configs/common';
import {SCREEN} from '../configs/screens';
import ManageFarmScreen from '../screens/ManageFarmScreen';

const Stack = createNativeStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator  initialRouteName={SCREEN.POLICY}> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREEN.POLICY}>
        <Stack.Screen
          name={SCREEN.LOGIN}
          component={LoginScreen}></Stack.Screen>
        <Stack.Screen
          name={SCREEN.SIGNUP}
          component={SignUpScreen}></Stack.Screen>
        <Stack.Screen
          name={SCREEN.POLICY}
          component={PolicySrceen}></Stack.Screen>
        <Stack.Screen
          name={SCREEN.FARM}
          component={FarmListScreen}></Stack.Screen>
        <Stack.Screen name={SCREEN.MAINTAB} component={MainTab}></Stack.Screen>
        <Stack.Screen name={SCREEN.MANAGE} component={ManageFarmScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
