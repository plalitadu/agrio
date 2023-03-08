import React from 'react';
import HeaderMain from '../../components/HeaderMain';
import {View, Image, Pressable, ScrollView, StyleSheet} from 'react-native';
import {Text} from '../../components/Text';
import Images from '../../configs/images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import ButtonIcon from '../../components/ButtonIcon';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    // flex: 3,
    marginLeft: 50,
  },
});

const FarmListScreen: React.FC = (props: any) => {
  console.log('props', props);
  const navigation = useNavigation<ScreenNavigationProp>();

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

  const manageFarmHandle = () => {
    navigation.navigate('MANAGE', {});
  };

  const addFarmHandle = () => {
    navigation.navigate('ADDFARM', {});
  };

  const pressHandle = () => {
    console.log('pressHandle');
  };

  return (
    <>
      <View style={{flexDirection: 'column', flex: 1}}>
        <View style={{flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
          <View>
            <HeaderMain
              type="farm-list"
              onClick={manageFarmHandle}
              headerName="Farm"
              >
              <View style={styles.button}>
                <ButtonIcon icon="plus" type="textBtn" onPress={addFarmHandle}>
                  Add Farm
                </ButtonIcon>
                <ButtonIcon icon="bars" type="textBtn" onPress={manageFarmHandle}>
                  Manage
                </ButtonIcon>
                <ButtonIcon icon="bell" type="iconBtn" onPress={pressHandle}>
                  {' '}
                </ButtonIcon>
              </View>
            </HeaderMain>
          </View>

          {/* <View
            style={{
              paddingTop: 10,
              paddingLeft: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              // flex:0.4
            }}>
            <Text h6={true} colors="textPrimary">
              My Farm
            </Text>
            <Text body2={true} colors="textPrimary" style={{paddingRight: 20}}>
              0 Farm
            </Text>
          </View> */}
        </View>
        <ScrollView style={{marginTop:-5}}>
          <View
            style={{
              flex: 1,
              padding: 24,
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
            <View>
              {DATA.length ? (
                DATA?.map((r: any, key: any) => (
                  <Pressable
                    onPress={() => console.log('presss')}
                    key={`farm-${key}`}>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderRadius: 12,
                        borderColor: '#E2E2E2',
                        backgroundColor: '#FFFFFF',
                        marginBottom: 25,
                      }}>
                      <View style={{alignContent: 'center'}}>
                        <View>
                          <Image
                            source={Images.nofarm}
                            style={{
                              width: '100%',
                              height: 120,
                              marginTop: -7,
                              overflow: 'hidden',
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            }}
                          />
                        </View>
                        <View style={{padding: 20}}>
                          <View style={{marginBottom: 10}}>
                            <Text
                              colors="textSecondary"
                              body1={true}
                              style={{fontWeight: 'bold'}}>
                              Farm name
                            </Text>
                          </View>
                          <View
                            style={{
                              backgroundColor: '#EAECEE',
                              alignSelf: 'flex-start',
                              padding: 5,
                              borderRadius: 4,
                            }}>
                            <Text style={{color: '#575757'}}>2 Rooms</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                ))
              ) : (
                <>
                  <View style={{marginTop: 220}}></View>
                  <View style={{alignItems: 'center'}}>
                    <Image source={Images.nofarm} />
                    <Text
                      h1={true}
                      colors="textPrimary"
                      style={{paddingRight: 0}}>
                      You have no farm
                    </Text>
                    <Text
                      body1={true}
                      colors="textPrimary"
                      style={{paddingRight: 0}}>
                      Start adding your first farm
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export {FarmListScreen};
