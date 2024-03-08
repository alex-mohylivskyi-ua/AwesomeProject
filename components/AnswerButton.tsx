
import {Text, Pressable, StyleSheet} from 'react-native';

type answerButtonProps = {
    value: string,
    pressed: boolean,
    onPress: () => void,
    state: string,
    disabled: boolean
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
    },



    normalButton: {
      backgroundColor: 'white',
    },
    normalButtonText: {
      color: 'black',
    },
    answerButtonSelected: {
      backgroundColor: 'rgba(0, 204, 255, 0.90)',
    },
    validButton: {
      backgroundColor: 'green'
    },
    validButtonText: {
      color: 'white'
    },
    errorButton: {
      backgroundColor: 'red'
    },
    errorButtonText: {
      color: 'white'
    },
  });

function AnswerButton(props: answerButtonProps) {
  let buttonStyle, textStyle;

  switch (props.state) {
    case 'valid':
      buttonStyle = styles.validButton;
      textStyle = styles.validButtonText;
      break;
    case 'error':
      buttonStyle = styles.errorButton;
      textStyle = styles.errorButtonText;
      break;
  }
    return (
      <Pressable 
        style={[styles.answerButton, props.pressed ? styles.answerButtonSelected : null, buttonStyle]} 
        onPress={props.onPress}
        >
        <Text style={styles.answerButtonText}>{props.value} {props.pressed ? 'p' : 'n'} </Text>
    </Pressable>
    );
}

export default AnswerButton;