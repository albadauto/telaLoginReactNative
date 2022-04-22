import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login/Login';
import Teste from './components/Teste';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: "Logar no sistema", headerStyle: { backgroundColor: "#222" }, headerTintColor: "white", headerTitleAlign:"center" }} />
        <Stack.Screen name="Teste" component={Teste} options={{ headerBackVisible: false, title: 'Sistema para listar pessoas', headerTitleAlign: 'center', headerStyle: { backgroundColor: "#222" }, headerTintColor: "white", animation: "flip" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}