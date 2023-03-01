import React from 'react';
import {Link as LinkOriginal} from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    hyperLink:{
        color:'#202020',
        borderBottomColor: '#202020', 
        borderBottomWidth: 1
    }
})

type LinkProps = {
    page: string;
    param?:any ;
    children: any;
    style?:any;
    onClick?:any
}

const Link: React.FC<LinkProps> = props => {
  return (
    <>
      <LinkOriginal style={[styles.hyperLink, props.style]} to={{screen: props.page, params: props.param}} onPress={props.onClick}>{props.children}</LinkOriginal>
    </>
  );
};

export {Link};
