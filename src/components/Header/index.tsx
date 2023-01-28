import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../Text';
import {STANDARD_FONT_BOLD} from '../../configs/theme';

const styles = StyleSheet.create({
  logoText: {
    color: '#469B72',
    fontSize: 30,
    fontFamily: STANDARD_FONT_BOLD,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

const Header: React.FC = () => {
  return (
    <View>
      <Text h2={true} style={styles.logoText}>
        Agrio
      </Text>
    </View>
  );
};

export {Header};
