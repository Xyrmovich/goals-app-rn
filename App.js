import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/goal-Item/goal-item.component';
import GoalInput from './components/goal-input/goal-input.component';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((courseGoal) => courseGoal.id !== goalId)
    );
  };

  return (
    <View style={styles.screen}>
      <Button
        title='Add new goal'
        onPress={() => setIsAddMode((currentIsAddMode) => !currentIsAddMode)}
      />
      <GoalInput
        onAddGoal={(enteredGoal) =>
          setCourseGoals((currentGoals) => [
            ...currentGoals,
            { id: Math.random().toString(), value: enteredGoal },
          ])
        }
        visible={isAddMode}
        toggleVisible={() =>
          setIsAddMode((currentIsAddMode) => !currentIsAddMode)
        }
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            children={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
