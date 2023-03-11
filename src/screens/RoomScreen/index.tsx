import React from 'react';
import {View, Image, Pressable, ScrollView, StyleSheet} from 'react-native';
import HeaderMain from '../../components/HeaderMain';
import ButtonIcon from '../../components/ButtonIcon';
import {TextInput} from '../../components/TextInput';
import Images from '../../configs/images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import {Text} from '../../components/Text';

const RoomScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [farmName, setFarmName] = React.useState('');
  const backHandle = () => {
    navigation.goBack();
  };
  //   const;
  return (
    <View>
      <View style={styles.headerStyle}>
        <HeaderMain type="back-header" headerName="Room 1">
          <ButtonIcon icon="arrow-left" type="iconBtn" onPress={backHandle}>
            {' '}
          </ButtonIcon>
        </HeaderMain>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.imageBox}>
          <ButtonIcon icon="plus" type="textBtn" onPress={() => {}}>
            Add Devices
          </ButtonIcon>
        </Pressable>
        <View style={styles.content}>
          <View>
            <Text h1={true}>Racks</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 20,
    marginTop: -5,
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  imageBox: {
    borderWidth: 0.2,
    alignItems: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingTop: 60,
  },
  content: {
    paddingTop: 20,
  },
});

export default RoomScreen;
