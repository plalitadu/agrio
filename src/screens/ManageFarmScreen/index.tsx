import React from 'react';
import HeaderMain from '../../components/HeaderMain';
import ButtonIcon from '../../components/ButtonIcon';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import {FlatList, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#f9c2ff',
    padding: 15,
    height: 50,
    // marginVertical: 8,
    // marginHorizontal: 16,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
  },
  icon: {marginTop: -14},
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const ManageFarmScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const backHandle = () => {
    navigation.goBack();
  };

  const pressHandle = () => {
    console.log('presssed');
  };
  return (
    <>
      <View style={{flexDirection: 'column', flex: 1}}>
        <View >
          <HeaderMain type="back-header" headerName="Manage Farm">
            <ButtonIcon icon="arrow-left" type="iconBtn" onPress={backHandle}>
              {' '}
            </ButtonIcon>
          </HeaderMain>
        </View>
        {/* <View style={{marginTop:-10}}> */}
          <FlatList
            data={DATA}
            //   renderItem={({item}) => <Item title={item.title} />}
            renderItem={item => (
              <View style={styles.item}>
                <View>
                  <Text style={styles.title}>{item.item.title}</Text>
                </View>
                <View style={styles.icon}>
                  <ButtonIcon
                    icon="imageIcon"
                    type="iconBtn"
                    onPress={pressHandle}>
                    {' '}
                  </ButtonIcon>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      {/* </View> */}
    </>
  );
};

export default ManageFarmScreen;
