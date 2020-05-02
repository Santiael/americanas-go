import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import styles from './styles';

export default function Fab({ style: propStyle = {}, children, ...props }) {
  const style = StyleSheet.flatten([styles.container, propStyle]);

  return (
    <View style={style}>
      <TouchableOpacity
        style={{
          ...styles.touchable,
          borderRadius: style.borderRadius,
          backgroundColor: style.backgroundColor,
        }}
        activeOpacity={0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
}
