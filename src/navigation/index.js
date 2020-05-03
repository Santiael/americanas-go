import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import Scanner from '../screens/Scanner';
import Payments from '../screens/Payments';
import ConfirmPayment from '../screens/ConfirmPayment';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
