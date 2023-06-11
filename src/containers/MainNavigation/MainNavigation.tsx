import * as React from 'react';

import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { List } from '../Pages/List';
import { Apptechka } from '../Pages/Apptechka';
import { Profile } from '../Pages/Profile';

const Tab = createBottomTabNavigator();

export const MainNavigation = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="list"
          screenOptions={{
            tabBarActiveTintColor: '#1890FF',
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="list"
            component={List}
            options={{
              tabBarLabel: 'Список покупок',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="text" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="apptechka"
            component={Apptechka}
            options={{
              tabBarLabel: 'Аптечка',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="plus" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              tabBarLabel: 'Профиль',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
