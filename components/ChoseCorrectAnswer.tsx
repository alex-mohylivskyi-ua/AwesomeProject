import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Alert, Pressable} from 'react-native';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux'
// import { increment, selectCount } from '../features/counter/counterSlice';
import { setCorrectVariant, selectCorrectVariant, selectSelectedVariant, 
  selectCurrentCardNumber, setCurrentCardNumber, 
  selectTotalNumberOfCards, setTotalNumberOfCards, setIsCorrectVariantSelected, setIsChecked, selectIsChecked, setSelectedVariant } from '../features/exercise/exerciseManagerSlice';

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
      backgroundColor: 'rgba(0, 0, 50, 0.90)',
      width: '80%',
      height: 50,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkAnswerButtonDisabled: {
      backgroundColor: 'rgba(0, 204, 255, 0.90)',
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
        imageUri: require('../images/run_card.png')
    },
    {
      id: 'help',
      name: 'help',
      phrase: 'допомога, допомагати',
      answers: [
          'jump',
          'help',
          'fly'
      ],
      correctAnswer: 1,
      imageUri: require('../images/help_card.png')
    },
    {
      id: 'english',
      name: 'english',
      phrase: 'англійська',
      answers: [
          'english',
          'ukrainian',
          'England'
      ],
      correctAnswer: 0,
      imageUri: require('../images/english_card.png')
    },
    {
      id: 'brother',
      name: 'brother',
      phrase: 'брат',
      answers: [
          'uncle',
          'people',
          'brother'
      ],
      correctAnswer: 2,
      imageUri: require('../images/brother_card.png')
    },
    {
      id: 'this',
      name: 'this',
      phrase: 'цей',
      answers: [
          'those',
          'this',
          'these'
      ],
      correctAnswer: 1,
      imageUri: require('../images/this_card.png')
    },
    {
      id: 'book',
      name: 'book',
      phrase: 'книга',
      answers: [
          'book',
          'magazine',
          'paper'
      ],
      correctAnswer: 0,
      imageUri: require('../images/book_card.png')
    },
    {
      id: 'we',
      name: 'we',
      phrase: 'ми',
      answers: [
          'they',
          'us',
          'we'
      ],
      correctAnswer: 1,
      imageUri: require('../images/we_card.png')
    },
];

const ChoseCorrectAnswer = ({ navigation }) => {
    // const [currentCard, setCard] = useState(0);
    // const [selectedVariant, setSelectedVariant] = useState(-1);

    const dispatch = useDispatch();

    // dispatch(setCorrectVariant(cards[0].correctAnswer));

    const correctVariant = useSelector(selectCorrectVariant);
    const selectedVariant = useSelector(selectSelectedVariant);
    const currentCardNumber = useSelector(selectCurrentCardNumber);
    const totalNumberOfCards = useSelector(selectTotalNumberOfCards);
    const isChecked = useSelector(selectIsChecked);
    const сheckAnswerButtonText = isChecked ? 'Далі' : 'Перевірити';

    const handlePress = () => {
      if (typeof selectedVariant === 'number') {
        // Perform actions when the Pressable is not disabled
        dispatch(setIsChecked(true));
        if (isChecked) {
          

          // Reset relevant states for the next card
          dispatch(setIsChecked(false));
          dispatch(setIsCorrectVariantSelected(false));
          dispatch(setSelectedVariant(null));

          if((currentCardNumber + 1) < totalNumberOfCards) {
            dispatch(setCurrentCardNumber(currentCardNumber + 1));
          } else {
            navigation.navigate('EnglishLevelSelectionPage');
            dispatch(setCurrentCardNumber(0));
          }
          
          

          // Here should be code that updates new currrentCardNumber, correctVariant, isChecked states
        } else {
          if (selectedVariant === correctVariant) {
            dispatch(setIsCorrectVariantSelected(true));
          } else {
            dispatch(setIsCorrectVariantSelected(false));
          }
        }
      }
    };

    useEffect(() => {
        // Dispatch action to set the correct variant when the component mounts or when currentCardNumber changes
        dispatch(setCorrectVariant(cards[currentCardNumber].correctAnswer));
        dispatch(setTotalNumberOfCards(cards.length));
    }, [currentCardNumber, totalNumberOfCards, dispatch]);

    return (
      <View style={{flex: 1}}>
        <Image source={require('../images/background_2.png')} style={styles.questionBackgroundImage}/>
        <View style={[styles.flexDirectionColumn, styles.mainContainer]}>
          <View style={[styles.container, styles.wrapper]}>
            <Text style={styles.taskName}>Виберіть правильний переклад!</Text>
            
              <Card 
                id={cards[currentCardNumber].id}
                name={cards[currentCardNumber].name}  
                phrase={cards[currentCardNumber].phrase}
                imageUri={cards[currentCardNumber].imageUri}
                answers={cards[currentCardNumber].answers}
                correctAnswer={cards[currentCardNumber].correctAnswer}
              />

          </View>
  
          <View style={styles.checkAnswerButtonWrapper}>
              <Pressable 
                  style={[styles.checkAnswerButton, typeof selectedVariant !== 'number' ? styles.checkAnswerButtonDisabled : null]} 
                  onPress={() => handlePress()}
                  disabled={typeof selectedVariant !== 'number'}
                  >
                  <Text style={styles.checkAnswerButtonText}>{сheckAnswerButtonText}</Text>
              </Pressable>
          </View>
        </View>
      </View>
    );
};

export default ChoseCorrectAnswer;