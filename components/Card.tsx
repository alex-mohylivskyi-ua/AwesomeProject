import {Text, StyleSheet, View, Image,} from 'react-native';
import AnswerButton from './AnswerButton';
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedVariant, selectSelectedVariant, selectIsCorrectVariantSelected, selectIsChecked } from '../features/exercise/exerciseManagerSlice';

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
    imageUri: object
}

const Card = (props: card) => {
  const dispatch = useDispatch();
  const selectedVariant = useSelector(selectSelectedVariant);
  const isCorrectVariantSelected = useSelector(selectIsCorrectVariantSelected);
  const isChecked = useSelector(selectIsChecked);

  const handlePress = (index: number) => {
    if (!isChecked) {
      dispatch(setSelectedVariant(index))
    }
  }
    return (
        <View style={styles.alignCenter}>
            <Image source={props.imageUri} style={styles.questionImage}/>
            <Text style={styles.questionText}>{props.phrase}</Text>

            <Text >is correct selected {isCorrectVariantSelected ? 'yes' : 'no'}</Text>
            <Text > Selected variant {selectedVariant}</Text>

            {props.answers.map((value, index, array) => {
              // Determine the state of the button
              let state = '';
              if (selectedVariant === index && isChecked) {
                state = isCorrectVariantSelected ? 'valid' : 'error';
              }

              return (
                <AnswerButton value={value} key={index} disabled={isChecked} onPress={ () => handlePress(index)} pressed={selectedVariant === index} state={state} />
              )
            })}
        </View>
    )
}

export default Card;