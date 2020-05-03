import React from 'react';
import { Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default [
  {
    type: 'Ame Digital',
    icon: () => (
      <Image
        style={{ height: 35, width: 60, resizeMode: 'contain' }}
        source={require('../assets/images/logo-ame.png')}
      />
    ),
  },
  {
    type: 'Cartão de Crédito',
    payment: 'MASTERCARD •••• 4321',
    icon: () => <FontAwesome name="cc-mastercard" size={28} color="#F85C00" />,
  },
  {
    type: 'Cartão de Crédito',
    payment: 'VISA •••• 5678',
    icon: () => <FontAwesome name="cc-visa" size={28} color="#1A1F6E" />,
  },
];
