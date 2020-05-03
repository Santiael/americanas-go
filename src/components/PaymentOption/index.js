import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styleFn from './styles';

export default function PaymentOption({
  disabled,
  onPress,
  type,
  text,
  selected = false,
  icon: Icon,
}) {
  const [styles, setStyles] = useState(styleFn(selected));

  useEffect(() => {
    setStyles(styleFn(selected));
  }, [selected]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      disabled={disabled}
      onPress={onPress}
    >
      <View style={styles.info}>
        <Text style={styles.type}>{type}</Text>

        {text ? <Text style={styles.text}>{text}</Text> : null}
      </View>
      <Icon />
    </TouchableOpacity>
  );
}
