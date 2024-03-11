import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Alert, Pressable, Button} from 'react-native';

const styles = StyleSheet.create({
    questionBackgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    startButton: {
        backgroundColor: 'rgba(0, 204, 255, 0.90)',
        width: '80%',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startButtonText: {
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const HomePage = ({ navigation }) => {
    return (
      <View style={{flex: 1}}>
        <Image source={require('../images/background_2.png')} style={styles.questionBackgroundImage}/>
        <View style={styles.container}>
            <Pressable 
                style={[styles.startButton]} 
                onPress={() => navigation.navigate('EnglishLevelSelectionPage')}
                >
                <Text style={styles.startButtonText}>Почати</Text>
            </Pressable>
        </View>
    </View>
    );
};

export default HomePage;