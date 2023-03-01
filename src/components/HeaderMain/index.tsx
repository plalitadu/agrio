import React from 'react';
import {View, StyleSheet,Platform} from 'react-native';
import {Text} from '../Text';
import ButtonIcon from '../ButtonIcon';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    padding:20,
    borderBottomColor :'#E2E2E2',
    borderBottomWidth:4,
    height:70,
    marginTop: Platform.OS === 'ios' ? 35 : 10

  },
  button:{
    flexDirection:'row',
    flex:3,
    
  }
});

type HeaderProps = {
    type: string
    children : string
};

const HeaderMain: React.FC<HeaderProps> = (props: any) => {
  const pressHandle = ()=>{
    console.log('pressHandle')
  }
  return (
    <View style={styles.main}>
      <View style={{flex:3}}>
        <Text h1={true} colors="textPrimary">{props.children}</Text>
      </View>
      <View style={styles.button}>
        <ButtonIcon icon="plus" type="textBtn" onPress={pressHandle} >Add Farm</ButtonIcon>
        <ButtonIcon icon="bars" type="textBtn" onPress={pressHandle} >Manage</ButtonIcon>
        <ButtonIcon icon="bell" type="iconBtn" onPress={pressHandle} > </ButtonIcon>
      </View>
    </View>
  );
};

export default HeaderMain;
