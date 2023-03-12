import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import MapView, {enableLatestRenderer, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Image from '../../configs/images';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import {GOOGLE_API_KEY} from '../../configs/info';
import axios from 'axios';

enableLatestRenderer();

const MapFarmScreen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [currentRegion, setCurrenRegion] = React.useState({
    latitude: 0,
    longitude: 0,
    // locationName: null,
  });
  const [locationName,setLocationName] = React.useState('')

  const [markerLocation, setMarkerLocation] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  const conFirmLocationHandle = () => {
    navigation.navigate('ADDFARM', {latLongData: currentRegion, locationName: locationName});
  };

  const changeLocationHandle = event => {
   
    const prev = {...currentRegion};
    prev.latitude = event.nativeEvent.coordinate.latitude;
    prev.longitude = event.nativeEvent.coordinate.longitude;
    setCurrenRegion(prev);
    // setMarkerLocation(prev)
  };

  const getLocationName = async() =>{
    let locationUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentRegion.latitude},${currentRegion.longitude}&sensor=true&key=${GOOGLE_API_KEY}`;

   const result=  await axios
      .get(locationUrl)
      .then(res => {
        if (res.status == 200) {
            return res.data.results[0].formatted_address
        //   setCurrenRegion({
        //     latitude: lat,
        //     longitude: long,
        //     locationName: res.data.results[0].formatted_address,
        //   });
        }
      })
      .catch(err => {
        console.log('err', err);
        return err
      });
      return result
  }

  const getCurrentLocation = () => {
    console.log('getCurrentLocation');
    Geolocation.getCurrentPosition(info => {
      //   console.log('info', info);
      let lat = info.coords.latitude;
      let long = info.coords.longitude;
      setCurrenRegion({latitude:lat,longitude:long})
      
      //   setMarkerLocation({latitude: lat, longitude: long});
    //   let locationUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true&key=${GOOGLE_API_KEY}`;

    //   const res = axios
    //     .get(locationUrl)
    //     .then(res => {
    //       if (res.status == 200) {
    //         setCurrenRegion({
    //           latitude: lat,
    //           longitude: long,
    //           locationName: res.data.results[0].formatted_address,
    //         });
    //       }
    //     })
    //     .catch(err => {
    //       console.log('err', err);
    //     });
    });
  };

  useEffect(()=>{
    const fetchData = async () =>{
      const resLocationName =   await getLocationName()
      console.log('resLocationName',resLocationName)
      setLocationName(resLocationName)
    }

    fetchData()
  },[currentRegion])

  useEffect(() => {
    getCurrentLocation();
    // Geolocation.getCurrentPosition(info => {
    //   let lat = info.coords.latitude;
    //   let long = info.coords.longitude;
    //   setCurrenRegion({latitude: lat, longitude: long});
    //   //   setMarkerLocation({latitude: lat, longitude: long});
    // });
  }, []);

  //   console.log('latlong', currentRegion);
  return (
    <View style={{flex: 1}}>
      <MapView
        style={styles.map}
        region={{
          latitude: currentRegion.latitude,
          longitude: currentRegion.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        initialRegion={{
          latitude: currentRegion.latitude,
          longitude: currentRegion.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        onPress={e => {
          changeLocationHandle(e);
        }}>
        <Marker
          draggable
          description="current location"
          coordinate={{
            latitude: currentRegion.latitude,
            longitude: currentRegion.longitude,
          }}
          //   onDrag={(e)=>console.log('drag',e)}
          onDragEnd={e => {
            console.log('dragEnd', e.nativeEvent.coordinate);
          }}
        />
      </MapView>

      <View
        style={{
          flexDirection: 'column',
          flex: 0.97,
        }}>
        <View style={{marginTop: 715, marginLeft: 370, width: 15}}>
          <TouchableOpacity
            onPress={getCurrentLocation}
            style={{
              width: 'auto',
              backgroundColor: '#ffffff',
              borderRadius: 16,
              alignSelf: 'center',
              padding: 5,
            }}>
            <Image.current_location_icon width="20px" height="20px" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button
            style={styles.btnStyle}
            buttonColor="#000000"
            textColor="#ffffff"
            mode="elevated"
            // disabled
            onPress={conFirmLocationHandle}>
            Use this location
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  btnStyle: {
    alignSelf: 'center',
    width: '90%',
    color: '#ffffff',
    borderRadius: 8,
  },
});

export default MapFarmScreen;
