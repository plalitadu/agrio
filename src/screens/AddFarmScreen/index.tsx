import React from 'react';
import {View} from 'react-native';
import HeaderMain from '../../components/HeaderMain';
import ButtonIcon from '../../components/ButtonIcon';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import { Text } from '../../components/Text';

const AddFarmScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const backHandle = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={{flexDirection: 'column', flex: 1, backgroundColor:'#FFFFFF'}}>
        <View>
          <HeaderMain type="back-header" headerName="">
            <ButtonIcon icon="arrow-left" type="iconBtn" onPress={backHandle}>
              {' '}
            </ButtonIcon>
          </HeaderMain>
        </View>
        <View style={{backgroundColor:'#FFFFFF',marginTop:-5}}>
            <View><Text h1={true} colors="textPrimary" style={{marginLeft:30, marginTop:10}}>Add New Farm</Text></View>
        </View>
      </View>
    </>
  );
};

export default AddFarmScreen;
