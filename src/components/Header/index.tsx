import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Text} from '../Text';
import {STANDARD_FONT_BOLD} from '../../configs/theme';

const styles = StyleSheet.create({
  logoText: {
    // color: '#469B72',
    paddingTop: Platform.OS === 'ios' ? 50 :0,
    fontSize: 30,
    fontFamily: STANDARD_FONT_BOLD,
    textAlign: 'center',
    paddingBottom: 10,
  },
  textPrimary:{
    color:'#202020'
  },
  textSecondary :{
    color :'#469B72'
   }
});

type HeaderProps = {
  color: 'textPrimary' | 'textSecondary';
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <View>
      <Text h2={true} colors={props.color} style={styles.logoText} >
        Agrio
      </Text>
    </View>
  );
};

export {Header};
