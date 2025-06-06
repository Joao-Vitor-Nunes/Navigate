import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// componente de item da tarefa
export default function TaskItem({ task, index, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      {/* bolinha com número da tarefa */}
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index + 1}</Text>
      </View>

      {/* toda a área clicável para marcar/desmarcar */}
      <TouchableOpacity onPress={() => onToggle(task.id)} style={styles.taskContainer}>
        <View>
          {/* texto da tarefa */}
          <Text style={[styles.task, task.completed && styles.completed]}>
            {task.text}
          </Text>

          {/* data da tarefa */}
          <Text style={styles.date}>{task.date}</Text>

          {/* status visual (ícone emoji) */}
          <Text style={styles.status}> 
            {task.completed ? '🆗' : '🔃'}
          </Text>
        </View>

        {/* botão de deletar (ícone de lixeira) */}
        <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.delete}>
          <MaterialIcons name="delete" size={20} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

// estilos visuais
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // lado a lado
    marginHorizontal: 20,
    marginBottom: 10, // espaço entre as tarefas
  },
  indexContainer: {
    backgroundColor: '#3E3364', // roxo
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50, // quadrado com número da tarefa
  },
  index: {
    color: '#fff',
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: '#3E3364',
    borderRadius: 12,
    flex: 1,
    flexDirection: 'row', // texto e lixeira lado a lado
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    minHeight: 60,
  },
  task: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    
  },
  completed: {
    textDecorationLine: 'line-through', // risca o texto
    color: '#ccc', // cor mais clara
  },
  date: {
    fontSize: 12,
    color: '#fff', // mantém legível
  },
  status: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '500',
  },
  delete: {
    marginLeft: 10, // espaço da lixeira
  },
});
