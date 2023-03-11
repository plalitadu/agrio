import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-paper';
import HeaderMain from '../../components/HeaderMain';
import ButtonIcon from '../../components/ButtonIcon';
import {TextInput} from '../../components/TextInput';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
        <View>
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
        <View>
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

        <View style={styles.content}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{flex: 0.8}}>
                <Text style={{fontWeight: '400'}}>Rack's Devices</Text>
                <Text style={{fontSize: 12, color: '#575757'}}>
                  No Device Selected
                </Text>
              </View>
              <View
                style={{alignItems: 'flex-end', flex: 0.2, paddingTop: 7.5}}>
                <Icon name="chevron-right" size={15} color="#202020" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, paddingTop: '70%'}}>
          <Button
            style={styles.btnStyle}
            buttonColor="#000000"
            textColor="#ffffff"
            mode="elevated"
            disabled
            onPress={() => {}}>
            Add a Rack
          </Button>
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
    paddingTop: 40,
  },
  btnStyle: {
    color: '#ffffff',
    borderRadius: 8,
  },
});

export default AddRackScreen;
