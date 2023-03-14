import React from 'react';
import {View, Image, StyleSheet, Pressable, ScrollView} from 'react-native';
import ButtonIcon from '../../components/ButtonIcon';
import {Text} from '../../components/Text';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import Images from '../../configs/images';
import {Link} from '../../components/Link';

const FarmDetailScreen: React.FC = (props: any) => {
  const {route = []} = props;
  const navigation = useNavigation<ScreenNavigationProp>();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Room 1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Room 2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Room 3',
    },
  ];

  const backHandle = () => {
    navigation.goBack();
  };

  const linkToAddFarmEditModeHandle = () => {
    navigation.navigate('ADDFARM', {mode:'edit'});
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
              onPress={linkToAddFarmEditModeHandle}>
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
        <ScrollView>
          <View>
            <View
              style={{
                // paddingTop: 10,
                // paddingLeft: 20,
                marginTop: 0,
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                // flex:0.4
              }}>
              <Text colors="textPrimary">0 Room</Text>
              <Text body2={true}>
                <Link page="ROOMDETAIL" style={{color: '#469B72'}}>
                  Add Room +
                </Link>
              </Text>
            </View>
          </View>
          {DATA.length ? (
            DATA?.map((r: any, key: any) => (
              <Pressable
                onPress={() => console.log('test')}
                key={`farm-${key}`}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderRadius: 12,
                    borderColor: '#E2E2E2',
                    backgroundColor: '#FFFFFF',
                    marginBottom: 25,
                  }}>
                  <View style={styles.roomUpper}>
                    <View style={{marginBottom: 10}}>
                      <Text
                        colors="textPrimary"
                        body1={true}
                        style={{fontWeight: 'bold'}}>
                        {r.title}
                      </Text>
                    </View>
                    <View>
                      <View style={styles.containerUpper}>
                        <View style={styles.readyToHavest}>
                          <Text style={{color: '#00331A'}}>
                            2 Ready to harvest
                          </Text>
                        </View>
                        <View
                          style={styles.planting}>
                          <Text style={{color: '#575757'}}>1 Planting</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.roomBottom}>
                    <View style={styles.continerBottomWAmbientSensor}>
                    {/* style={styles.continerBottomWOAmbientSensor}>
                        <Text>This room not set Ambient Sensor</Text> */}
                     
                      <View
                        style={{
                          flex: 0.35,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{color: '#00331A', flex: 0.35}}>Temp</Text>
                        <Text
                          style={{
                            color: '#00331A',
                            flex: 0.5,
                            fontWeight: 'bold',
                          }}>
                          25.4 °
                        </Text>
                      </View>
                      <View style={{flex: 0.35, flexDirection: 'row'}}>
                        <Text style={{color: '#00331A', flex: 0.6}}>
                          Humidity
                        </Text>
                        <Text
                          style={{
                            color: '#00331A',
                            flex: 0.5,
                            fontWeight: 'bold',
                          }}>
                          68%
                        </Text>
                      </View>
                      <View style={{flex: 0.35, flexDirection: 'row'}}>
                        <Text style={{color: '#00331A', flex: 0.35}}>CO2</Text>
                        <Text
                          style={{
                            color: '#00331A',
                            flex: 0.5,
                            fontWeight: 'bold',
                          }}>
                          540 ppm
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
            ))
          ) : (
            <>
              <View style={{marginTop: 200}}></View>
              <View style={{alignItems: 'center'}}>
                <Image source={Images.nofarm} />
                <Text h1={true} colors="textPrimary" style={{paddingRight: 0}}>
                  {route?.params.data.title} have no room
                </Text>
                <Text
                  body1={true}
                  colors="textPrimary"
                  style={{paddingRight: 0}}>
                  Start adding your first room
                </Text>
              </View>
            </>
          )}
        </ScrollView>

        {/* </View> */}
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
  roomUpper: {flex: 0.6, padding: 10},
  roomBottom: {
    flex: 0.4,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },
  containerUpper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  continerBottomWAmbientSensor: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly',

  },
  continerBottomWOAmbientSensor: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly',

    backgroundColor:'#E2E2E2',
    color:'#8C8C8C'
  },
  readyToHavest: {
    flex: 0.45,
    backgroundColor: '#E6F5ED',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 4,
  },
  planting:{
    flex: 0.45,
    backgroundColor: '#EAECEE',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 4,
  }
});

export default FarmDetailScreen;
