import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import DummyPage from '../screens/DummyPage';

import StarIcon from '../assets/icons/star.svg';
import ListIcon from '../assets/icons/clipboard-list.svg';
import BasketIcon from '../assets/icons/shopping-basket.svg';
import HeartIcon from '../assets/icons/heart.svg';
import MoreIcon from '../assets/icons/more.svg';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  style: {
    height: 60,
    backgroundColor: '#8A8A8A',
  },
  tabStyle: {
    justifyContent: 'center',
    paddingVertical: 8,
  },
  labelStyle: {
    color: '#FFF',
  },
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'destaques',
          tabBarIcon: () => <StarIcon width={20} />,
        }}
      />
      <Tab.Screen
        name="Departments"
        component={DummyPage}
        options={{
          tabBarLabel: 'departamentos',
          tabBarIcon: () => <ListIcon height={20} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={DummyPage}
        options={{
          tabBarLabel: 'cesta',
          tabBarIcon: () => <BasketIcon height={22} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={DummyPage}
        options={{
          tabBarLabel: 'favoritos',
          tabBarIcon: () => <HeartIcon width={20} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={DummyPage}
        options={{
          tabBarLabel: 'mais',
          tabBarIcon: () => <MoreIcon height={8} />,
        }}
      />
    </Tab.Navigator>
  );
}
