import React from 'react';
import {View, Image, Pressable, ScrollView, StyleSheet} from 'react-native';
import HeaderMain from '../../components/HeaderMain';
import ButtonIcon from '../../components/ButtonIcon';
import {TextInput} from '../../components/TextInput';
import Images from '../../configs/images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import {Text} from '../../components/Text';

const AddRackScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [rackName, setRackName] = React.useState('');
  const [rackNumberLevels, setRackNumberLevels] = React.useState('');
  const [rackNumberRows, setRackNumberRows] = React.useState('');
  const [potPerRow, setPotPerRow] = React.useState('');
  const backHandle = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View style={styles.headerStyle}>
        <HeaderMain type="back-header" headerName="">
          <ButtonIcon icon="arrow-left" type="iconBtn" onPress={backHandle}>
            {' '}
          </ButtonIcon>
        </HeaderMain>
      </View>

      <View style={styles.container}>
        {/* <View style={styles.imageBox}>
          <Image source={Images.nofarm} />
        </View> */}
        <View>
          <Text h1={true} colors="textPrimary" style={{marginTop: 10}}>
            Add a New Rack
          </Text>
        </View>
        <View style={styles.content}>
          <View>
            <TextInput
              keyboardType="default"
              placeholder="Rack Name"
              onChangeText={text => setRackName(text)}
              value={rackName}
              editable={true}
            />
          </View>
        </View>
        <View style={{paddingTop: 20}}>
          <Text h2={true} colors="textPrimary" style={{marginTop: 10}}>
            Rack size
          </Text>
        </View>
        <View style={styles.content}>
          <View>
            <TextInput
              keyboardType="default"
              placeholder="Number of levels"
              onChangeText={text => setRackNumberLevels(text)}
              value={rackNumberLevels}
              editable={true}
            />
            <TextInput
              keyboardType="default"
              placeholder="Number of rows"
              onChangeText={text => setRackNumberRows(text)}
              value={rackNumberRows}
              editable={true}
            />
            <TextInput
              keyboardType="default"
              placeholder="Pot per row"
              onChangeText={text => setPotPerRow(text)}
              value={potPerRow}
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

export default AddRackScreen;
