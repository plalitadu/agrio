import React, {Children} from 'react';
import {Text as TextOriginal, TextProps, StyleSheet} from 'react-native';
import {STANDARD_FONT, STANDARD_FONT_BOLD} from '../../configs/theme';

const styles = StyleSheet.create({
  h1: {
    fontFamily: STANDARD_FONT_BOLD,
  },
  h2: {
    fontFamily: STANDARD_FONT_BOLD,
  },
  h3: {
    fontFamily: STANDARD_FONT_BOLD,
  },
  h4: {
    fontFamily: STANDARD_FONT_BOLD,
  },
  h5: {
    fontFamily: STANDARD_FONT_BOLD,
  },
  h6: {
    fontFamily: STANDARD_FONT_BOLD,
  },
  body1: {
    fontFamily: STANDARD_FONT,
    fontSize: 16
  },
  body2: {
    fontFamily: STANDARD_FONT,
  },
  subtitle: {borderBottomColor: '#202020', borderBottomWidth: 1},
  caption: {},
  overline: {},
  textPrimary: {color: '#202020'},
  textSecondary: {
    color: '#000',
  },
  warning: {},
  error: {
    color: 'red',
  },
});

interface TextCustomProps extends TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  body1?: boolean;
  body2?: boolean;
  subtitle?: boolean;
  caption?: boolean;
  highlight?: boolean;
  overline?: boolean;
  center?: boolean;
  colors?: 'textPrimary' | 'textSecondary' | 'warning' | 'error';
}

const Text: React.FC<TextCustomProps> = props => {
  return (
    <>
      <TextOriginal
        style={[
          props.h1 && styles.h1,
          props.h2 && styles.h2,
          props.h3 && styles.h3,
          props.h4 && styles.h4,
          props.h5 && styles.h5,
          props.h6 && styles.h6,
          props.body1 && styles.body1,
          props.body2 && styles.body2,
          props.subtitle && styles.subtitle,
          props.caption && styles.caption,
          props.overline && styles.overline,
          props.center && {textAlign: 'center'},
          props.colors && styles[props.colors],
          props.style,
        ]}>
        {props.children}
      </TextOriginal>
    </>
  );
};

export {Text};
