import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';

const Counter = () => {
    // State: a counter value
    const [counter, setCounter] = useState(0)
  
    // Action: code that causes an update to the state when something happens
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1)
    }
  
    // View: the UI definition
    return (
        <View>
            <Text>Value: {counter} Pressable</Text>
            <Pressable 
                onPress={() => increment()}
                >
                <Text>Increment</Text>
            </Pressable>
        </View>
    )   
}

export default Counter;