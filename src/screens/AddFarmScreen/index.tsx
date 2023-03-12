import React, {useEffect} from 'react';
import {
  View,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import HeaderMain from '../../components/HeaderMain';
import ButtonIcon from '../../components/ButtonIcon';
import {TextInput} from '../../components/TextInput';
import Images from '../../configs/images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import {Text} from '../../components/Text';
import {launchImageLibrary} from 'react-native-image-picker';
import {farmCreate} from '../../api/apiFarmManage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SCREEN} from '../../configs/screens';

const options = {
  title: 'Select Image',
  type: 'library',
  options: {
    selectionLimit: 0,
    mediaType: 'photo',
    includeBase64: false,
  },
};

const AddFarmScreen: React.FC = (props: any) => {
  const {route = []} = props;
  const navigation = useNavigation<ScreenNavigationProp>();
  const [farmName, setFarmName] = React.useState('');
  const [farmImage, setFarmImage] = React.useState({
    uri: null,
    type: null,
    name: null,
  });

  const [farmLocation, setFarmLocation] = React.useState({
    latitude: 0,
    longitude: 0,
    locationName:null
  });

  const [validateInputs,setValidateInputs] =React.useState({
    validateImage: false,
    validateName: false,
    validateLocation: false
  })

  useEffect(() => {
    if (route.params.latLongData) {
      setFarmLocation({
        latitude: route.params.latLongData.latitude,
        longitude: route.params.latLongData.longitude,
        locationName:route.params.locationName
      });
    }
  }, [route]);

  const browseImageHandle = async () => {
    const images = await launchImageLibrary(options);
    console.log('images', images);
    if (images !== undefined) {
      setFarmImage(images?.assets[0]);
    }
    // if (images !== undefined) {
    //   console.log('resultttttt', images?.assets[0]);
    //   const formData = new FormData();
    //   formData.append('file', {
    //     uri: images?.assets[0].uri,
    //     type: images?.assets[0].type,
    //     name: images?.assets[0].fileName,
    //   });
    // }

    // let res = await fetch(API_AGRIO_MAIN+"/farm", {
    //   method: 'post',
    //   body: formData,
    //   headers: {
    //     'Content-Type': 'multipart/form-data; ',
    //   },
    // });
  };
  console.log('image', farmImage.uri);

  const creaetFarmHandle = () => {
    console.log('create farm!!!');
  };

  const backHandle = () => {
    navigation.goBack();
  };

  const selectMapScreen = () => {
    navigation.navigate(SCREEN.MAPFARM as any);
  };

  useEffect(()=>{
    console.log('farmName',farmName)
    // const prevValidate = {...validateInputs}
    // if(farmName!== ''){
    //   setValidateInputs({
    //     validateImage:prevValidate.validateImage,
    //     validateName: !prevValidate.validateName,
    //     validateLocation : prevValidate.validateLocation
    //   })
    // }
    // if(farmImage.uri !== null && farmImage.name !== null &&  farmImage.type !== null){
    //   setValidateInputs({
    //     validateImage: !prevValidate.validateImage,
    //     validateName: prevValidate.validateName,
    //     validateLocation : prevValidate.validateLocation
    //   })
    // }
    // if(farmLocation.latitude !== null && farmLocation.longitude !== null &&  farmLocation.locationName!== null){
    //   setValidateInputs({
    //     validateImage: prevValidate.validateImage,
    //     validateName: prevValidate.validateName,
    //     validateLocation : !prevValidate.validateLocation
    //   })
    // }

  },[farmName,farmImage,farmLocation])

  console.log('validateInputs',validateInputs)
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
        <View style={{paddingBottom: 20}}>
          <Text h1={true} colors="textPrimary">
            Add New Farm
          </Text>
        </View>
        <View style={styles.imageBox}>
          <TouchableOpacity onPress={browseImageHandle}>
            {farmImage.uri == null ? (
              <Image source={Images.nofarm} />
            ) : (
              <Image source={{uri: farmImage.uri}} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {/* <View>
            <Text>Farm Name</Text>
          </View> */}
          <View>
            <TextInput
              keyboardType="default"
              placeholder="Farm Name"
              onChangeText={text => setFarmName(text)}
              value={farmName}
              editable={true}
            />
          </View>
        </View>

        <View style={styles.content}>
          <TouchableOpacity onPress={selectMapScreen}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{flex: 0.8}}>
                <Text style={{fontWeight: '400'}}>Farm's Location</Text>
                {farmLocation.latitude == 0 && farmLocation.longitude == 0 ? (
                  <Text style={{fontSize: 12, color: '#575757'}}>
                    Pin Your Location
                  </Text>
                ) : (
                  <Text style={{fontSize: 12, color: '#575757'}}>
                   {farmLocation.locationName}, Lat: {farmLocation.latitude}, Long: {farmLocation.longitude}
                  </Text>
                )}
              </View>
              <View
                style={{alignItems: 'flex-end', flex: 0.2, paddingTop: 7.5}}>
                <Icon name="chevron-right" size={15} color="#202020" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 0.7,
          }}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Button
              style={styles.btnStyle}
              buttonColor="#000000"
              textColor="#ffffff"
              mode="elevated"
              // disabled
              onPress={creaetFarmHandle}>
              Create Farm
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
    paddingTop: 20,
  },
  btnStyle: {
    color: '#ffffff',
    borderRadius: 8,
  },
});

export default AddFarmScreen;
