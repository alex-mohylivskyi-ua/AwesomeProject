
import {Text, Pressable, StyleSheet} from 'react-native';

type answerButtonProps = {
    value: string,
    selected: boolean,
    onPress: () => void
}

const styles = StyleSheet.create({
    answerButton: {
      backgroundColor: 'white',
      height: 30,
      width: 175,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 10
  
    },
    answerButtonSelected: {
      backgroundColor: 'rgba(0, 204, 255, 1)'
    },
    answerButtonError: {
      backgroundColor: 'red'
    },
    answerButtonText: {
      color: 'black',
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
    }
  });

function AnswerButton(props: answerButtonProps) {
    return (
      <Pressable 
        style={[styles.answerButton, props.selected ? styles.answerButtonSelected : null]} 
        onPress={props.onPress}
        >
        <Text style={styles.answerButtonText}>{props.value}</Text>
    </Pressable>
    );
}

export default AnswerButton;