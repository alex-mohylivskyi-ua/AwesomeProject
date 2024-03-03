import React, { useState } from 'react';
import {Text, StyleSheet, View, Image,} from 'react-native';
import AnswerButton from './AnswerButton';

const styles = StyleSheet.create({
  questionText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20
  },
  questionImage: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    marginVertical: 8,
    borderRadius: 15,
  },
  alignCenter: {
    alignItems: 'center'
  }
});

type card = {
    id: string,
    name: string,
    phrase: string,
    answers: Array<string>,
    correctAnswer: number,
    imageUri: object,
    setSelectedVariant: (value: string) => void,
    selectedVariant: string
}

const Card = (props: card) => {
    return (
        <View style={styles.alignCenter}>
            <Image source={props.imageUri} style={styles.questionImage}/>
            <Text style={styles.questionText}>{props.phrase}</Text>

            {props.answers.map((value, index, array) => (
                
                <AnswerButton value={value} key={value} onPress={() => props.setSelectedVariant(value)} selected={props.selectedVariant === value}/>
            ))}
        </View>
    )
}

export default Card;