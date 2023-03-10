import React from 'react';
import {
  BottomTabBar,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Image from '../configs/images';
import {FarmListScreen} from '../screens/FarmListScreen';
import {TabActions} from '@react-navigation/native';
import {SCREEN} from '../configs/screens';
import {View, StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceScreen from '../screens/DeviceScreen';
import ShopScreen from '../screens/ShopScreen';
import SettingScreen from '../screens/SettingScreen';
import {FOOTER_ACTIVE, FOOTER_INACTIVE} from '../configs/theme';

const styles = StyleSheet.create({
  // img: {
  //   width: Scale.point(24),
  //   height: Scale.point(24)
  // },
  navigatorContainer: {
    zIndex: 2000,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});

const Tab = createBottomTabNavigator();

const tabBarOption: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveBackgroundColor: FOOTER_ACTIVE,
  tabBarActiveTintColor: FOOTER_ACTIVE,
  tabBarStyle: {
    position: 'absolute',
    // height:100,
    //   height: Scale.point(60),
    //   backgroundColor: 'transparent',
    // elevation: 30,
    paddingBottom: 10,
  },
  tabBarItemStyle: {
    // height:40,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
    // maxHeight:30
    // marginBottom:10,
    // marginBottom:20
  },
  tabBarLabelStyle: {
    //   fontSize: Scale.point(12),
    // position:'relative',
    // height: 0,
    // fontFamily: 'GraphikTH-SemiBold',
  },
};

const MainTab: React.FC = () => {
  //   console.log('maintab', <Image.footer_icon.home width="100%" height="100%" />);
  return (
    <Tab.Navigator
      tabBar={props => (
        <View>
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={tabBarOption}>
      <Tab.Screen
        name={SCREEN.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image.footer_icon.home width="25px" height="26px" />
              </View>
            );
          },
          //   tabBarLabel: 'Home',
          //   tabBarActiveBackgroundColor:FOOTER_ACTIVE,
          //   tabBarActiveTintColor:FOOTER_ACTIVE,
          //   tabBarStyle:{
          //     // borderRadius:300,
          //     backgroundColor:'#ffffff'
          //     // borderTopRightRadius :50,
          //     // borderTopLeftRadius:50,
          //     // paddingVertical:30
          //   },
        }}
      />
      <Tab.Screen
        name={SCREEN.DEVICE}
        component={DeviceScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image.footer_icon.phone width="25px" height="22px" />
              </View>
            );
          },
          tabBarLabel: 'Device',
        }}
      />
      <Tab.Screen
        name={SCREEN.FARM}
        component={FarmListScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image.footer_icon.farm width="26px" height="26px" />
              </View>
            );
          },
          tabBarLabel: 'Farm',
        }}
      />
      <Tab.Screen
        name={SCREEN.SHOP}
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image.footer_icon.shop width="26px" height="25px" />
              </View>
            );
          },
          tabBarLabel: 'Shop',
        }}
      />
      <Tab.Screen
        name={SCREEN.SETTING}
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image.footer_icon.setting width="26px" height="25px" />
              </View>
            );
          },
          tabBarLabel: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
