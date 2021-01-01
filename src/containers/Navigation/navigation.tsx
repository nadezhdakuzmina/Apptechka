import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { List } from '../Pages/List/List';
import Apptechka from '../Pages/Apptechka';
import Profile from '../Pages/Profile';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Аптечка"
      screenOptions={{
        tabBarActiveTintColor: '#1890FF',
      }}
    >
      <Tab.Screen
        name="Список покупок"
        component={List}
        options={{
          tabBarLabel: 'Список покупок',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="text" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Аптечка"
        component={Apptechka}
        options={{
          tabBarLabel: 'Аптечка',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Профиль"
        component={Profile}
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
