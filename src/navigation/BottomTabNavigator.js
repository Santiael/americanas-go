import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import DummyTab from './DummyTab';
import Cart from '../screens/Cart';

import colors from '../constants/colors';

import StarIcon from '../assets/icons/star.svg';
import ListIcon from '../assets/icons/clipboard-list.svg';
import BasketIcon from '../assets/icons/shopping-basket.svg';
import HeartIcon from '../assets/icons/heart.svg';
import MoreIcon from '../assets/icons/more.svg';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  style: {
    height: 60,
    backgroundColor: colors.primaryColor,
  },
  tabStyle: {
    justifyContent: 'center',
    paddingVertical: 8,
  },
  labelStyle: {
    color: colors.white,
  },
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'destaques',
          tabBarIcon: () => <StarIcon width={20} />,
        }}
      />
      <Tab.Screen
        name="Departments"
        component={DummyTab}
        options={{
          tabBarLabel: 'departamentos',
          tabBarIcon: () => <ListIcon height={20} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'cesta',
          tabBarIcon: () => <BasketIcon height={22} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={DummyTab}
        options={{
          tabBarLabel: 'favoritos',
          tabBarIcon: () => <HeartIcon width={20} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={DummyTab}
        options={{
          tabBarLabel: 'mais',
          tabBarIcon: () => <MoreIcon height={8} />,
        }}
      />
    </Tab.Navigator>
  );
}
