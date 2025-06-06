import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculatorScreen from '../components/CalculatorScreen';
import ToDoListScreen from '../toDoList/ToDoListScreen';
import ConversorScreen from '../conversor/ConversorScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calculadora" component={CalculatorScreen} />
      <Tab.Screen name="ToDoList" component={ToDoListScreen} />
      <Tab.Screen name="Conversor" component={ConversorScreen} />
    </Tab.Navigator>
  );
}
