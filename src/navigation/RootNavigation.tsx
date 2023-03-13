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
import AddFarmScreen from '../screens/AddFarmScreen';
import RoomScreen from '../screens/RoomScreen';
import AddRackScreen from '../screens/AddRackScreen';
import SelectDeviceScreen from '../screens/SelectDeviceScreen';
import MapFarmScreen from '../screens/MapFarmScreen';
import FarmDetailScreen from '../screens/FarmDetailScreen';

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
        <Stack.Screen
          name={SCREEN.MANAGE}
          component={ManageFarmScreen}></Stack.Screen>
        <Stack.Screen
          name={SCREEN.ADDFARM}
          component={AddFarmScreen}></Stack.Screen>
        <Stack.Screen
          name={SCREEN.ROOMDETAIL}
          component={RoomScreen}></Stack.Screen>
        <Stack.Screen
          name={SCREEN.ADDRACK}
          component={AddRackScreen}></Stack.Screen>
        <Stack.Screen
          name={SCREEN.SELECTDEVICE}
          component={SelectDeviceScreen}></Stack.Screen>
            <Stack.Screen
          name={SCREEN.MAPFARM}
          component={MapFarmScreen}></Stack.Screen>
                 <Stack.Screen
          name={SCREEN.FARMDETAIL}
          component={FarmDetailScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
