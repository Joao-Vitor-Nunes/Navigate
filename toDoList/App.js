import React, { useState } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import TaskInputField from './TaskInputField';
import TaskItem from './TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = ({ text, date }) => {
    if (text.trim() === '' || date.trim() === '') return;

    const newTask = {
      id: Date.now().toString(),
      text,
      date,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
  const updatedTasks = tasks.filter(task => task.id !== id);
  setTasks(updatedTasks);
  };


  const toggleTaskStatus = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
    <FlatList
      data={tasks}
      renderItem={({ item, index }) => (
        <TaskItem
          task={item}
          index={index}
          onToggle={toggleTaskStatus}
          onDelete={deleteTask}
        />
      )}
      keyExtractor={item => item.id}
    />

        <TaskInputField onAddTask={addTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});
