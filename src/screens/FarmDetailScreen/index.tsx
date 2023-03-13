import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonIcon from '../../components/ButtonIcon';
import {Text} from '../../components/Text';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import {TextInput} from '../../components/TextInput';
import {Button} from 'react-native-paper';

const FarmDetailScreen: React.FC = (props: any) => {
  const {route = []} = props;
  const navigation = useNavigation<ScreenNavigationProp>();

  const backHandle = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.main}>
      <View style={styles.headerStyle}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            flex: 0.4,
          }}>
          <View style={{}}>
            <ButtonIcon icon="arrow-left" type="iconBtn" onPress={backHandle}>
              {' '}
            </ButtonIcon>
          </View>
          <View>
            <ButtonIcon
              icon="imageIcon"
              type="iconBtn"
              onPress={() => console.log('pressed')}>
              {' '}
            </ButtonIcon>
          </View>
        </View>
        <View style={{marginTop: 0, paddingLeft: 25, flex: 0.6}}>
          <Text h1={true} colors="textPrimary">
            {route?.params.data.title}
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View
          style={{
            padding: 5,
            backgroundColor: '#FFFFFF',
          }}>
          <View>
            <View
              style={{
                // paddingTop: 10,
                // paddingLeft: 20,
                marginTop: -10,
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                // flex:0.4
              }}>
              <Text h6={true} colors="textPrimary">
                My Farm
              </Text>
              <Text body2={true} colors="textPrimary">
                0 Farm
              </Text>
            </View>
          </View>
          <View></View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flexDirection: 'column', flex: 1},

  headerStyle: {
    backgroundColor: '#E6F5ED',
    flex: 0.15,
    paddingTop: 10,
  },
  container: {
    flex: 0.85,
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
  btnStyle: {
    color: '#ffffff',
    borderRadius: 8,
  },
});

export default FarmDetailScreen;
