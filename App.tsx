import React, { useState } from 'react';
import ChoseCorrectAnswer from './components/ChoseCorrectAnswer';
import store from './app/store';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ChoseCorrectAnswer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;