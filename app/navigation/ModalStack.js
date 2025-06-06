import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import ModalScreen from '../components/ModalScreen';

const Stack = createNativeStackNavigator();

export default function ModalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Principal" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Modal" component={ModalScreen} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  );
}
