import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';

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
    <NavigationContainer>
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
          component={Home}
          options={{
            tabBarLabel: 'departamentos',
            tabBarIcon: () => <ListIcon height={20} />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Home}
          options={{
            tabBarLabel: 'cesta',
            tabBarIcon: () => <BasketIcon height={22} />,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Home}
          options={{
            tabBarLabel: 'favoritos',
            tabBarIcon: () => <HeartIcon width={20} />,
          }}
        />
        <Tab.Screen
          name="More"
          component={Home}
          options={{
            tabBarLabel: 'mais',
            tabBarIcon: () => <MoreIcon height={8} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
