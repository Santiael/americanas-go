import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import Payment from '../screens/Payment';
import ConfirmPayment from '../screens/ConfirmPayment';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
