import React, { useState } from 'react';
import ChoseCorrectAnswer from './components/ChoseCorrectAnswer';
import EnglishLevelSelectionPage from './components/EnglishLevelSelectionPage';
import store from './app/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './components/HomePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="Home" component={HomePage} options={{
            headerShown: false
          }}/>
          <Stack.Screen name="EnglishLevelSelectionPage" component={EnglishLevelSelectionPage} options={{
            headerShown: true
          }}/>
          <Stack.Screen name="ChoseCorrectAnswer" component={ChoseCorrectAnswer} options={{
            headerShown: true,
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;