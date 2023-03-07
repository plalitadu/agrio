import React, {useState} from 'react';
import {View, StyleSheet, Platform,TouchableOpacity} from 'react-native';
import {Header} from '../../components/Header';
import {STANDARD_FONT, STANDARD_FONT_BOLD} from '../../configs/theme';
import {Text} from '../../components/Text';
import {TextInput} from '../../components/TextInput';
import {Button} from 'react-native-paper';
import {Link} from '../../components/Link';
import {ScreenNavigationProp} from '../../configs/common';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    padding: 10,
    paddingTop: 50,
    flex: 1,
    // justifyContent: 'space-evenly',
  },
  welcome: {
    textAlign: 'left',
    fontSize: 28,
    fontFamily: STANDARD_FONT_BOLD,
  },
  subWording: {fontFamily: STANDARD_FONT, fontWeight: 'bold', fontSize: 16},
  loginBtn: {
    color: '#ffffff',
    borderRadius: 8,
    // alignSelf: 'center',
  },
});

const SignUpScreen: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<ScreenNavigationProp>();

  const phoneNoHandle = (value: any) => {
    const result = value.replace(/[^0-9]/g, '');
    setPhoneNo(result);
  };

  return (
    <View style={styles.main}>
      <View
        style={{
          flex: 5,
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
            Create Agrio account
          </Text>
          <Text style={styles.subWording} colors="textPrimary">
            One account for manage your smart farm
          </Text>
        </View>
        <View>
          <TextInput
            keyboardType="default"
            placeholder="Name"
            value={userName}
            onChangeText={text => setUserName(text)}
          />
        </View>
        <View>
          <TextInput
            maxLength={10}
            keyboardType="number-pad"
            placeholder="Phone number"
            onChangeText={val => phoneNoHandle(val)}
            value={phoneNo}
          />
        </View>
        <View>
          <TextInput
            placeholder="Email"
            onChangeText={val => setEmail(val)}
            value={email}
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
        <View>
          <Button
            style={styles.loginBtn}
            buttonColor="#000000"
            textColor="#ffffff"
            mode="elevated"
            onPress={() => console.log('Pressed')}>
            Sign Up
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
              or Sign Up with Social Media
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#C1C1C1'}} />
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <View>
            <Text body1={true} colors="textPrimary">
              Already have an account?
            </Text>
          </View>
          <View style={{marginLeft: 5}}>
            {Platform.OS === 'ios' ? (
              <View
                style={{borderBottomColor: '#202020', borderBottomWidth: 1}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('LOGIN', {})}>
                  <Text>Log in</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Link page="LOGIN"> Log in</Link>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export {SignUpScreen};
