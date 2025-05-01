import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


import LoginScreen from './src/screens/Login/LoginScreen';
import UserCad from './src/screens/UserRegister/UserRegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          gestureEnabled: true, 
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
  name="UserCad" 
  component={UserCad} 
  options={({ navigation }) => ({
    title: 'Login',
    
  })}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
