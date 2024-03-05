import React, { useState } from 'react';
import ChoseCorrectAnswer from './components/ChoseCorrectAnswer';
import store from './app/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <ChoseCorrectAnswer />
    </Provider>
  );
};

export default App;