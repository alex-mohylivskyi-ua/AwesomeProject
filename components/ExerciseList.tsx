import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Alert, Pressable, Button} from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
});

const ExerciseList = ({ navigation }) => {
    return (
      <View>
        <Image source={require('../images/background_2.png')} style={styles.backgroundImage}/>
        <Text>Welcome to the ExerciseList Page!</Text>
        <Button
            title="Go to Exercise"
            onPress={() => navigation.navigate('ChoseCorrectAnswer')}
        />
        </View>
    );
};

export default ExerciseList;