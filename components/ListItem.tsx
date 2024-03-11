import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Alert, Pressable, Button} from 'react-native';

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#F9F6FD',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        marginBottom: 10,
        width: '100%'
    },
    listLabel: {
        marginBottom: 20
    },
    listItemNumber: {
        fontWeight: '600',
        marginBottom: 5
    },
    listItemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    }
});

type listItemProps = {
    name: string,
    tasks: Array<Object>,
    id: string
}
// const OnPressHandler = () => {
//     Alert.alert('asdasd');
// }

// const ListItemProps = {
//     data: object,
    
// }

const ListItem = (props: {data: object, onPressHandler }) => {
    return (
        <View style={styles.listItemContainer} key={props.data.id}>
            <Text style={styles.listLabel}>{props.data.name}</Text>
            {props.data.tasks.map((task: object, index: number) => {
                return (
                    <Pressable 
                        style={[styles.listItem]} 
                        key={task.id}
                        onPress={props.onPressHandler}
                        >
                        <Text style={styles.listItemNumber}>{++index}</Text>
                        <Text>{task.name}</Text>
                    </Pressable>
                );
            })}
            
        </View>
        
    );
};

export default ListItem;