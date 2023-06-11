import { useDispatch, Provider, useSelector } from 'react-redux';
import { registerRootComponent } from 'expo';
import React, { useEffect } from 'react';
import { createStore } from './data/store';
import { MainNavigation } from './containers/MainNavigation';
import { InitialNavigation } from './containers/InitialNavigation';
import { isUserAuthed } from './data/selectors/isUserAuthed';
import { initApp } from './data/actions/core/resolvers';
import { isAppLoaded } from './data/selectors/isAppLoaded';
import { Loader } from './containers/Pages/Loader';

const store = createStore();

const DataLayer = () => {
  const dispatch = useDispatch();

  const isLoaded = useSelector(isAppLoaded);
  const isUserLoggedIn = useSelector(isUserAuthed);

  useEffect(() => {
    // @ts-ignore
    dispatch(initApp());
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }

  if (isUserLoggedIn) {
    return <MainNavigation />;
  }

  return <InitialNavigation />;
};

const App = () => (
  <Provider store={store}>
    <DataLayer />
  </Provider>
);

export default registerRootComponent(App);
