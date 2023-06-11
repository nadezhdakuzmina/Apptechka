import * as React from 'react';

import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Auth } from '../Pages/Auth';
import { Registration } from '../Pages/Registration';

const Stack = createNativeStackNavigator();

export const InitialNavigation = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="authorization"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="authorization"
            component={Auth}
          />
          <Stack.Screen
            name="registration"
            component={Registration}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
