import React, { useState } from 'react';
import {
  // TextInput as TextInputOriginal,
  View,
  // TextInputProps as TextInputPropsOriginal,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput as TextInputOriginal } from 'react-native-paper';

const styles = StyleSheet.create({
  input: {
    backgroundColor:'#FFFFFF'
    // '#F5F5F5',
    // borderBottomColor: '#C1C1C1',
    // borderBottomWidth: 1,
  },
  icon:{
    alignItems : 'flex-start',
    marginRight: 12,

  }
});

type TextProps = {
  variant?: 'standard' | 'outlined' | 'filled';
  placeholder?: string;
  onChangeText: (text: string) => void;
  leftIcon?: string;
  rightIcon?: string;
  onPress?: () => void;
  editable?: boolean;
  value?: string;
  inputType?: string;
  keyboardType?: any;
  maxLength?:number
  
};

const TextInput: React.FC<TextProps> = props => {
  const {
    variant = 'standard',
    leftIcon,
    rightIcon,
    placeholder,
    onChangeText,
    onPress,
    editable = true,
    value,
    inputType ,
    keyboardType='default',
    maxLength
  } = props;

  const [passwordVisible,setPasswordVisible] = useState(true)

  return (
    <View>
      <TextInputOriginal
        style={styles.input}
        underlineColor='#000000'
        activeUnderlineColor='#000000'
        mode='flat'
        placeholder={placeholder}
        onChangeText={onChangeText}
        editable={editable}
        value={value} 
        secureTextEntry={inputType == 'password' ? passwordVisible : false}
        right={inputType == 'password' ? <TextInputOriginal.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={()=>{setPasswordVisible(!passwordVisible)}} /> : ''}
        maxLength={maxLength}
        keyboardType={keyboardType}
      />
      
    </View>
  );
};

export {TextInput};
