import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Text} from '../Text';
import ButtonIcon from '../ButtonIcon';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    padding: 15,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 6,
    height: 70,
    marginTop: Platform.OS === 'ios' ? 35 : 10,
  },
  button: {
    flexDirection: 'row',
    flex: 3,
  },
  subHeader: {marginTop: 4, marginLeft: 3},
});

type HeaderProps = {
  type: string;
  children?: any;
  headerName?: string;
  onClick?: () => void;
};

const HeaderMain: React.FC<HeaderProps> = (props: any) => {
  // console.log('header', props);

  return (
    <View style={styles.main}>
      {props.type === 'back-header' ? props.children : <></>}
      <View style={{flex: 3}}>
        {props.type === 'farm-list' ? (
          <Text h1={true} colors="textPrimary">
            {props.headerName}
          </Text>
        ) : (
          <Text body1={true} colors="textPrimary" style={styles.subHeader}>
            {props.headerName}
          </Text>
        )}
      </View>
      {props.type === 'farm-list' ? props.children : <></>}
    </View>
  );
};

export default HeaderMain;
