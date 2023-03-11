import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {Button} from 'react-native-paper';
import HeaderMain from '../../components/HeaderMain';
import ButtonIcon from '../../components/ButtonIcon';
import {TextInput} from '../../components/TextInput';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import {Text} from '../../components/Text';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

const SelectDeviceScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [rackName, setRackName] = React.useState('');
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'doser', title: 'Doser', color: 'red', backgroundColor: 'red'},
    {key: 'led', title: 'LED Controller'},
    {key: 'switch', title: 'Switch'},
  ]);
  const backHandle = () => {
    navigation.goBack();
  };
  const FirstRoute = () => <View style={{flex: 1}} />;

  const SecondRoute = () => <View style={{flex: 1}} />;

  const SwitchRoute = () => <View style={{flex: 1}} />;

  const renderScene = SceneMap({
    doser: FirstRoute,
    led: SecondRoute,
    switch: SwitchRoute,
  });

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
        <View>
          <Text h1={true} colors="textPrimary" style={{marginTop: 10}}>
            Select Device
          </Text>
        </View>
        {/* <View> */}
        <TabView
          style={{paddingTop: 10}}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{backgroundColor: '#ffffff'}}
              indicatorStyle={{backgroundColor: '#469B72'}}
              renderLabel={({route, focused}) => (
                <Text style={{color: focused ? '#202020' : '#C1C1C1'}}>
                  {route.title}
                </Text>
              )}
            />
          )}
        />
        {/* </View> */}
        <View
          style={{
            flex: 0.68,
          }}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Button
              style={styles.btnStyle}
              buttonColor="#000000"
              textColor="#ffffff"
              mode="elevated"
              onPress={() => {}}>
              Select
            </Button>
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
    paddingTop: 40,
  },
  btnStyle: {
    color: '#ffffff',
    borderRadius: 8,
  },
});

export default SelectDeviceScreen;
