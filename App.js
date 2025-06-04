import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/Login/LoginScreen';
import UserCad from './src/screens/UserRegister/registerSubmit';
import MainApp from './src/screens/Main/MainApp';
import SplashTransition  from './src/screens/Login/Transition';
const Stack = createNativeStackNavigator();
//Tela com as rotas de navegacao
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login" //Rota inicial definida como a tela de login
        screenOptions={{
          gestureEnabled: true,
        }}>
        
        <Stack.Screen
          name="Login" // Login do usuário
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="UserCad"
          component={UserCad} // Cadastro do usuário
          options={{
            title: 'Cadastro',
            headerStyle: {
              backgroundColor: '#241ECC',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
         name="Splash" // Tela de transicao entre login bem sucedido e tela principal do app
         component={SplashTransition} 
         options={{ headerShown: false }}
         />

        <Stack.Screen
          name="MainApp" // Tela principal do App
          component={MainApp}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
