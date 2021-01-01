import { useDispatch, Provider, useSelector } from 'react-redux';
import { registerRootComponent } from 'expo';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { createStore } from './data/store';
import { updateStore } from './data/actions/core/resolvers';
import { State } from './data/types';
import { MyTabs } from './containers/Navigation/navigation';
import Registration from './containers/Pages/Registration';
import Auth from './containers/Pages/Auth';

const store = createStore();
const Stack = createNativeStackNavigator();

const DataLayer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: State) => state.core);

  console.log(data);

  useEffect(() => {
    // @ts-ignore
    dispatch(updateStore('ec47b1e6adf0711fd39417322291c977'));
    
    setTimeout(() => { console.log(store.getState()); }, 3000);
  }, []);

  if (data) {
    return (
      <NativeBaseProvider>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
      </NativeBaseProvider>
    );
  }
  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Registration}
        />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

const App = () => (
  <Provider store={store}>
    <DataLayer />
  </Provider>
);

export default registerRootComponent(App);
