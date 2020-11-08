import React, { useState } from 'react';

import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const { onAddGoal, visible, toggleVisible } = props;

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    toggleVisible();
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonGroupContainer}>
          <View style={styles.buttonContainer}>
            <Button title='ADD' onPress={addGoalHandler} />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title='Cancel'
              color='red'
              onPress={() => {
                toggleVisible();
                setEnteredGoal('');
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonGroupContainer: {
    width: '80%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '40%',
    height: '100%',
  },
});

export default GoalInput;
