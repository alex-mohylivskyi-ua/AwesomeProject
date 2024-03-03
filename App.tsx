import React, { useState } from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button, Alert, Pressable} from 'react-native';
import Card from './components/Card';
import ChoseCorrectAnswer from './components/ChoseCorrectAnswer';

const App = () => {
  return (
    <ChoseCorrectAnswer />
  );
};

export default App;