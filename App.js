import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login/Login';
import Produtos from './components/Produtos/Index';
import Home from './components/Teste';

const Stack = createNativeStackNavigator();

export default function App() {
  const option = {
    headerStyle:{
      backgroundColor:"#222"
    },
    headerTintColor:"white",
    title:"Produtos",
    headerTitleAlign:"center",
    
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: "Logar no sistema", headerStyle: { backgroundColor: "#222" }, headerTintColor: "white", headerTitleAlign:"center" }} />
        <Stack.Screen name="Teste" component={Home} options={{ headerBackVisible: false, title: 'Sistema para listar pessoas', headerTitleAlign: 'center', headerStyle: { backgroundColor: "#222" }, headerTintColor: "white", animation: "flip" }} />
        <Stack.Screen name="produtos" component={Produtos} options={option}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}