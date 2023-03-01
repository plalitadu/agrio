import React from 'react';
import HeaderMain from '../../components/HeaderMain';
import {View, Image} from 'react-native';
import {Text} from '../../components/Text';
import Images from '../../configs/images';
import MainTab from '../../navigation/MainTab';

const FarmListScreen: React.FC = () => {
  return (
    <>
      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <HeaderMain type="farm-list">Farm</HeaderMain>
        <View
          style={{
            paddingTop: 10,
            paddingLeft: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            //   flex:1
          }}>
          <Text h6={true} colors="textPrimary">
            My Farm
          </Text>
          <Text body2={true} colors="textPrimary" style={{paddingRight: 20}}>
            0 Farm
          </Text>
        </View>
        <View style={{flex:0}}></View>
        <View style={{alignItems: 'center', flex: 0}}>
          <Image source={Images.nofarm} />
          <Text h1={true} colors="textPrimary" style={{paddingRight: 20}}>
            You have no farm
          </Text>
          <Text body1={true} colors="textPrimary" style={{paddingRight: 20}}>
            Start adding your first farm
          </Text>
        </View>
      </View>
    </>
  );
};

export {FarmListScreen};
