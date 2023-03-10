import React from 'react';
import {View, Image, Pressable, ScrollView, StyleSheet} from 'react-native';
import HeaderMain from '../../components/HeaderMain';
import ButtonIcon from '../../components/ButtonIcon';
import {TextInput} from '../../components/TextInput';
import Images from '../../configs/images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import {Text} from '../../components/Text';

const AddFarmScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [farmName, setFarmName] = React.useState('');
  const backHandle = () => {
    navigation.goBack();
  };
  //   const;
  return (
    <View>
      <View style={styles.headerStyle}>
        <HeaderMain type="back-header" headerName="">
          <ButtonIcon icon="arrow-left" type="iconBtn" onPress={backHandle}>
            {' '}
          </ButtonIcon>
        </HeaderMain>
      </View>
      <View>
        <Text
          h1={true}
          colors="textPrimary"
          style={{marginLeft: 20, marginTop: 10}}>
          Add New Farm
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image source={Images.nofarm} />
        </View>
        <View style={styles.content}>
          <View>
            <Text>Farm Name</Text>
          </View>
          <View>
            <TextInput
              keyboardType="default"
              placeholder="Farm 1"
              onChangeText={text => setFarmName(text)}
              value={farmName}
              editable={true}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#ffffff',
  },
  container: {
    padding: 20,
    marginTop: -5,
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  imageBox: {
    alignItems: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: '#E9E9E9',
    borderRadius: 8,
  },
  content: {
    paddingTop: 20,
  },
});

export default AddFarmScreen;
