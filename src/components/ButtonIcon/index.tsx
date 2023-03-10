import React from 'react';
// import { Button as ButtonOriginal } from 'react-native-paper'
import {Button as ButtonOriginal} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS_TEXT} from '../../configs/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Image from '../../configs/images';

const styles = StyleSheet.create({
  button: {
    height: 95,
    alignItems: 'center',
    padding: 8,
  },
  iconButton: {
    height: 95,
    alignItems: 'center',
    padding: 8,
    marginLeft: 5,
  },
});

type ButtonProps = {
  icon?: string;
  children: string;
  onPress: Function;
  type: string;
};

const ButtonIcon: React.FC<ButtonProps> = (props: any) => {
  console.log('test',props.icon.substring(9,props.icon.length))
  return (
    <>
      {props.type == 'textBtn' ? (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Icon name={props.icon} color="#202020" />
          <Text style={{color: '#202020'}}>{props.children}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.iconButton} onPress={props.onPress}>
        
          {props.icon === 'imageIcon' ? (
            <Image.setting_icon width="25px" height="26px" />
          ) : (
            <Icon name={props.icon} size={15} color="#202020" />
          )}

          {/* <Text style={{color: '#202020'}}>{props.children}</Text> */}
        </TouchableOpacity>
      )}
    </>
  );
  // (<View >
  //     {/* <ButtonOriginal mode="text" icon={props.icon} textColor={COLORS_TEXT} >{props.children}</ButtonOriginal> */}
  //     <ButtonOriginal title={props.children} />
  // </View>)
};

export default ButtonIcon;
