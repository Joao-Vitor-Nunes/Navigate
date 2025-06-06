import React, { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TaskInputField({ onAddTask }) {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = () => {
    if (task.trim() === '' || date.trim() === '') return;
    onAddTask({ text: task, date });
    setTask('');
    setDate('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputField}
          placeholder="Digite a tarefa"
          placeholderTextColor="#fff"
          value={task}
          onChangeText={setTask}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Digite a data (ex: 29/05/2025)"
          placeholderTextColor="#fff"
          value={date}
          onChangeText={setDate}
        />
      </View>

      <TouchableOpacity onPress={handleAdd}>
        <View style={styles.button}>
          <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#fff',
    backgroundColor: '#3E3364',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
    paddingVertical: 10
  },
  inputWrapper: {
    flex: 1,
    marginRight: 10,
  },
  inputField: {
    color: '#fff',
    height: 40,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
