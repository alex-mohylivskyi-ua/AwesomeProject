import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert, Pressable, Button} from 'react-native';
import ListItem from './ListItem';

const styles = StyleSheet.create({
    questionBackgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 25,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginTop: 20
    }
});

type ItemData = {
    id: string;
    name: string;
    tasks: Array<Object>
};

const leveList: ItemData[] = [
    {
        id: 'beginner',
        name: 'Beginner',
        tasks: [
            {
                id: 'iWeYouThey',
                name: 'Побудова речень в англійській мові | I / We / You / They'
            }
        ]
    }
];

const EnglishLevelSelectionPage = ({ navigation }) => {
    const handlePress = (navigation) => {
        navigation.navigate('ChoseCorrectAnswer');
    }
    return (
      <View style={{flex: 1}}>
        <Image source={require('../images/background_2.png')} style={styles.questionBackgroundImage}/>
       
        
       
        <FlatList
            style={styles.content}
            data={leveList}
            renderItem={({item}) => <ListItem data={item} onPressHandler={() => handlePress(navigation)}/>}
            horizontal={false}
            keyExtractor={item => item.id}
        />
    </View>
    );
};

export default EnglishLevelSelectionPage;