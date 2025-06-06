import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calculadora from '../../calculadora';
import Conversor from '../../conversor';
import ToDoList from '../../toDoList';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calculadora" component={Calculadora} />
      <Tab.Screen name="Conversor" component={Conversor} />
      <Tab.Screen name="To-Do List" component={ToDoList} />
    </Tab.Navigator>
  );
}
