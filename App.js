import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import TelaInicial from './src/componentes/TelaInicial';
import TelaTriologia1 from './src/componentes/TelaTriologia1';
import TelaTriologia2 from './src/componentes/TelaTriologia2';
import TelaTriologia3 from './src/componentes/TelaTriologia3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial}/>
        <Stack.Screen name="Triologia 1" component={TelaTriologia1}/>
        <Stack.Screen name="Triologia 2" component={TelaTriologia2}/>
        <Stack.Screen name="Triologia 3" component={TelaTriologia3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
