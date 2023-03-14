import React from 'react';
import HeaderMain from '../../components/HeaderMain';
import {View, Image, Pressable, ScrollView, StyleSheet} from 'react-native';
import {Text} from '../../components/Text';
import Images from '../../configs/images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import ButtonIcon from '../../components/ButtonIcon';
import { SCREEN } from '../../configs/screens';

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
      title: 'Farm 1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Farm 2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Farm 3',
    },
  ];

  const linkToManageFarmHandle = () => {
    navigation.navigate(SCREEN.MANAGE as any);
  };

  const linkToRoomDetailHandle = () => {
    navigation.navigate(SCREEN.ADDRACK as any);
  };
  const linkToAddFarmHandle = () => {
    navigation.navigate(SCREEN.ADDFARM as any, {mode:'create'});
  };

  const pressHandle = () => {
    console.log('pressHandle');
  };

  const linkToFarmDetailHandle = (data:any) =>{
    console.log('farmdetail',data)
    navigation.navigate(SCREEN.FARMDETAIL as any, {data:data})
  }

  return (
    <>
      <View style={{flexDirection: 'column', flex: 1}}>
        <View style={{flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
          <View>
            <HeaderMain
              type="farm-list"
              onClick={linkToManageFarmHandle}
              headerName="Farm">
              <View style={styles.button}>
                <ButtonIcon
                  icon="plus"
                  type="textBtn"
                  onPress={linkToRoomDetailHandle}>
                  Add Rack
                </ButtonIcon>
                {/* <ButtonIcon
                  icon="buromobelexperte"
                  type="textBtn"
                  onPress={roomDetailHandle}>
                  Room Detail
                </ButtonIcon> */}
                <ButtonIcon icon="plus" type="textBtn" onPress={linkToAddFarmHandle}>
                  Add Farm
                </ButtonIcon>
                <ButtonIcon
                  icon="bars"
                  type="textBtn"
                  onPress={linkToManageFarmHandle}>
                  Manage
                </ButtonIcon>
                <ButtonIcon icon="bell" type="iconBtn" onPress={pressHandle}>
                  {' '}
                </ButtonIcon>
              </View>
            </HeaderMain>
          </View>

        </View>
        <ScrollView style={{marginTop: -5}}>
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
                    onPress={()=>linkToFarmDetailHandle(r)}
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
                              width: 362,
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
                           {r.title}
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
