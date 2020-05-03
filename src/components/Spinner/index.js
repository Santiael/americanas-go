import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import colors from '../../constants/colors';

export default function Spinner({ size = 64, color = colors.primaryColor }) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <EvilIcons name="spinner-3" size={size} color={color} />
    </Animated.View>
  );
}
