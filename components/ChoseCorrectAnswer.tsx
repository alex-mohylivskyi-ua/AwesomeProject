import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, Alert, Pressable} from 'react-native';
import Card from './Card';

const styles = StyleSheet.create({
    wrapper: {
      marginTop: 50
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 16,
    },
    taskName: {
      height: 40,
      fontSize: 20,
      fontWeight: '600',
      color: 'white'
    },
    questionBackgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    checkAnswerButton: {
      backgroundColor: 'rgba(0, 204, 255, 0.90)',
      width: '80%',
      height: 50,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkAnswerButtonText: {
      color: 'white',
      fontSize: 18
    },
    checkAnswerButtonWrapper: {
      alignItems: 'center',
      marginBottom: 40
      
    },
    flexDirectionColumn: {
      flexDirection: 'column'
    },
    mainContainer: {
      flex: 1,
    },
    alignCenter: {
      alignItems: 'center'
    }
  });

const cards = [
    {
        id: 'work',
        name: 'work',
        phrase: 'праця, працювати',
        answers: [
            'sleep',
            'work',
            'eat'
        ],
        correctAnswer: 1,
        imageUri: require('../images/work_card.png')
    },
    {
        id: 'run',
        name: 'run',
        phrase: 'бігти',
        answers: [
            'dance',
            'old',
            'run'
        ],
        correctAnswer: 2,
        imageUri: require('../images/work_card.png')
    }
];

const ChoseCorrectAnswer = () => {
    const [currentCard, setCard] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState(-1);
    const [correctAnswer, setCorrectAnswer] = useState(cards[currentCard].correctAnswer);
    const [isCorrectSelected, setCorrectSelectedState] = useState(null);

    const checkAnswer = () => {
        if (selectedVariant !== -1) {
            if (correctAnswer === selectedVariant) {
                // setCorrectSelectedState(true);
            }
        }
    }

    



    return (
      <View style={{flex: 1}}>
        <Image source={require('../images/background_2.png')} style={styles.questionBackgroundImage}/>
        <View style={[styles.flexDirectionColumn, styles.mainContainer]}>
          <View style={[styles.container, styles.wrapper]}>
            <Text style={styles.taskName}>Виберіть правильний переклад</Text>

              <Card 
                id={cards[currentCard].id}
                name={cards[currentCard].name}  
                phrase={cards[currentCard].phrase}
                imageUri={cards[currentCard].imageUri}
                answers={cards[currentCard].answers}
                correctAnswer={cards[currentCard].correctAnswer}
                setSelectedVariant={setSelectedVariant}
                selectedVariant={selectedVariant}
              />
          </View>
  
          <View style={styles.checkAnswerButtonWrapper}>
              <Pressable 
                  style={styles.checkAnswerButton} 
                  onPress={() => checkAnswer()}
                  >
                  <Text style={styles.checkAnswerButtonText}>Перевірити</Text>
              </Pressable>
          </View>
        </View>
      </View>
    );
};

export default ChoseCorrectAnswer;