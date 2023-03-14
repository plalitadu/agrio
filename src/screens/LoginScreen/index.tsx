import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';

import {View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {STANDARD_FONT_BOLD, STANDARD_FONT} from '../../configs/theme';
import {TextInput} from '../../components/TextInput';
import {Text} from '../../components/Text';
import {Header} from '../../components/Header';
import {useNavigation, Link as LinkOri} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import {Link} from '../../components/Link';
import { authenToken } from '../../api/apiAuth';
import { SCREEN } from '../../configs/screens';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    padding: 10,
    flex: 1,
    // justifyContent: 'space-evenly',
  },
  logoText: {
    color: '#469B72',
    fontSize: 30,
    fontFamily: STANDARD_FONT_BOLD,
    textAlign: 'center',
    paddingBottom: 10,
  },
  loginBtn: {
    color: '#ffffff',
    borderRadius: 8,
    // alignSelf: 'center',
  },
  btnGrid: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
    justifyContent: 'flex-start',
    // alignSelf: 'center',
  },
  welcome: {
    textAlign: 'left',
    fontSize: 28,
    fontFamily: STANDARD_FONT_BOLD,
  },
  subWording: {fontFamily: STANDARD_FONT, fontWeight: 'bold', fontSize: 16},
  forgotPass: {
    marginLeft: 2,
    alignSelf: 'flex-start',
  },
  subtitle: {borderBottomColor: '#202020', borderBottomWidth: 1},
});

type LoginProps = {
  email?: string;
  password?: string
};

const LoginScreen: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState<string>('jca.dev@demouser');
  const [password, setPassword] = useState<string>('jcadevelopers1234!');
  const navigation = useNavigation<ScreenNavigationProp>();

  const loginHandle = async () =>{
    if(email !== '' && password !== ''){
      
      const token = await authenToken({username:email,password:password})
      if(token.access !== undefined){
        
        navigation.navigate(SCREEN.MAINTAB as any,{token:token.access})
      }else{
        //alert login error
      }
     
    }
    
  }

  useEffect(()=>{
    console.log('email',email)
    console.log('pass',password)
  },[email,password])
  return (
    <View style={styles.main}>
      <View
        style={{
          flex: 4,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        <Header color="textSecondary" />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            flex: 0.5,
          }}>
          <Text style={styles.welcome} colors="textPrimary">
            Welcome back!
          </Text>
          <Text style={styles.subWording} colors="textPrimary">
            Log in to your smart farm platflom
          </Text>
        </View>
        <View>
          <TextInput
            keyboardType="default"
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
            editable={true}
          />
        </View>
        <View>
          <TextInput
            keyboardType="default"
            placeholder="Password"
            inputType="password"
            onChangeText={text => setPassword(text)}
            value={password}
            editable={true}
          />
        </View>
        <View style={styles.forgotPass}>
          <Text h4={true} colors="textPrimary" subtitle={true}>
            Forgot Password?
          </Text>
        </View>
        <View>
          <Button
            style={styles.loginBtn}
            buttonColor="#000000"
            textColor="#ffffff"
            mode="elevated"
            onPress={loginHandle}>
            Log in
          </Button>
        </View>
      </View>
      <View style={{flex: 2}}></View>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#C1C1C1'}} />
          <View>
            <Text
              style={{width: 220, textAlign: 'center'}}
              body1={true}
              colors="textPrimary">
              {' '}
              or Login with Social Media
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#C1C1C1'}} />
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <View>
            <Text body1={true} colors="textPrimary">
              Don't have an account?
            </Text>
          </View>
          <View style={{marginLeft: 5}}>
            {Platform.OS === 'ios' ? (
              <View
                style={{borderBottomColor: '#202020', borderBottomWidth: 1}}>
                <TouchableOpacity onPress={()=>navigation.navigate('SIGNUP', {})}>
                  <Text>
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Link page="SIGNUP" style={styles.subtitle}>
                Sign up
              </Link>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export {LoginScreen};
