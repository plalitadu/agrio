import React, { useEffect } from 'react';
import {Header} from '../../components/Header';
import {View, StyleSheet,BackHandler} from 'react-native';
import {Text} from '../../components/Text';
import {
  STANDARD_THAI_FONT,
  STANDARD_FONT,
  COLORS_PRIMARY,
  STANDARD_THAI_FONT_BOLD,
} from '../../configs/theme';
import {Button} from 'react-native-paper';
import {Link} from '../../components/Link';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '../../configs/common';
import { SCREEN } from '../../configs/screens';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    padding: 10,
    flex: 1,
    backgroundColor: '#FFFFFF',
    // justifyContent: 'space-evenly',
  },
  loginBtn: {
    color: '#ffffff',
    borderRadius: 8,
    fontFamily: STANDARD_THAI_FONT,
    // alignSelf: 'center',
  },
});

const PolicySrceen: React.FC = () => {
  
  const navigation = useNavigation<ScreenNavigationProp>(); 

  const handleExitApp = () =>{
    BackHandler.exitApp()
  }

  useEffect(()=>{
    let flag = false
    if(flag){
      navigation.navigate(SCREEN.LOGIN as any)
    }
  })
  return (
    <View style={styles.main}>
      <Header color="textPrimary" />
      <View style={{backgroundColor: '#FFFFFF', flex: 0.2}}>
        <Text headerThai={true} colors="textPrimary">
          ข้อตกลงและเงื่อนไขการใช้บริการ
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#E8E8E8',
          flex: 2,
          justifyContent: 'flex-start',
          height: 50,
        }}>
        <Text></Text>
      </View>
      <View style={{backgroundColor: '#FFFFFF', flex: 0.4,justifyContent:'center',flexDirection:'column'}}>
        <View style={{flex:0.5}}>
          <Button
            style={styles.loginBtn}
            buttonColor="#000000"
            textColor="#ffffff"
            mode="elevated"
            labelStyle={{fontFamily:STANDARD_THAI_FONT_BOLD,fontSize:15}}
            onPress={() => navigation.navigate('LOGIN',{})}>
            ยอมรับและดำเนินการต่อ
          </Button>
        </View>
        <View style={{alignItems:'center',flex:0.3}} >
          <Link style={{fontFamily:STANDARD_THAI_FONT_BOLD}} page="SIGNUP" onClick={handleExitApp}>ไม่ยอมรับ</Link>
        </View>
      </View>
    </View>
  );
};

export {PolicySrceen};
