import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type ScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type TabParamList = {};

export type RootStackParamList = {
  LOGIN: {};
  SIGNUP: {};
  POLICY:{};
  FARM:{};
  MAINTAB:{};
  HOME:{};
  DEVICE:{};
  SHOP:{};
  SETTING:{};
  MANAGE:{};
  ADDFARM:{};
};
