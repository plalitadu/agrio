import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import {Button} from 'react-native-paper';
import HeaderMain from '../../components/HeaderMain';
import ButtonIcon from '../../components/ButtonIcon';
import {FlatListRadius} from '../../components/FlatListRadius';
import Images from '../../configs/images';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import {Text} from '../../components/Text';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

const SelectDeviceScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [selectedId, setSelectedId] = React.useState<string>('');
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

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Agrow Dose',
      serial: '111',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      serial: '222',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      serial: '333',
    },
  ];
  const onSelectedId = (data: string) => {
    setSelectedId(data);
  };
  const deviceObject = () => (
    <FlatListRadius
      onPress={onSelectedId}
      selectedId={selectedId}
      data={DATA}
    />
  );
  const DoserRoute = () => <View style={{flex: 1}}>{deviceObject()}</View>;

  const LedRoute = () => <View style={{flex: 1}} />;

  const SwitchRoute = () => <View style={{flex: 1}} />;

  const renderScene = SceneMap({
    doser: DoserRoute,
    led: LedRoute,
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
        <View
          style={{
            flex: 2,
          }}>
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
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Button
            style={styles.btnStyle}
            buttonColor="#000000"
            textColor="#ffffff"
            mode="elevated"
            onPress={() => {
              navigation.goBack();
            }}>
            Select
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
    width: 10,
    height: 10,
  },
  content: {
    paddingTop: 40,
  },
  btnStyle: {
    color: '#ffffff',
    borderRadius: 8,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    height: 50,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
  },
  icon: {marginTop: -14},
});

export default SelectDeviceScreen;
