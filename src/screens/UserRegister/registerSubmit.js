import React, { useState } from 'react';
import { Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/registerStyles.js';
import {handleSignUp } from '../../hooks/userRegister';

export default function App( {navigation} ) {
  const passwordRequirements = [
    'Caracteres especiais (@#$%)',
    'Números',
    'Mín 6 caracteres, Máx 16 caracteres',
  ];
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const verifyPassword = (pass, confirmPass) => {
    if (!confirmPass) {
      setError('');
      return;
    }
    if (pass !== confirmPass) {
      setError('Senhas não coincidem');
    } else {
      setError('');
    }
  };

  const handleSubmit = async () => {
    const result = await handleSignUp(
      email,  
      password, 
      confirmPassword, 
      nome, 
      usuario, 
      cpf
    );
    if (result.success) {
      alert('Cadastro realizado com sucesso!');
      navigation.navigate('Login')
    } else {
      setError(result.error);
    }
  };
  const fadeAnim = useRef( new Animated.Value(0)).current;

  useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 700,
    useNativeDriver: true,
  }).start();
}, []);
const animatedStyle = {
  opacity: fadeAnim,
  transform: [
    {
      translateY: fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [30, 0],
      }),
    },
  ],
};
  return (
    <Animated.View style={[styles.cadContainer, animatedStyle]}>
      <ScrollView showsVerticalScrollIndicator={false}
      
      >

      
        <Text style={styles.cadTitle}>Cadastro de Usuário</Text>

        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CPF * (Somente Números)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={cpf}
            onChangeText={(text) => setCpf(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="words"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome de usuário *</Text>
          <TextInput
            style={styles.input}
            value={usuario}
            onChangeText={(text) => setUsuario(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType= "email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={[
              styles.input,
              password && error ? styles.error : styles.success,
            ]}
            secureTextEntry
            placeholder="*****"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              verifyPassword(text, confirmPassword);
            }}
          />
          <View style={styles.passwordInfo}>
            <FlatList
              data={passwordRequirements}
              renderItem={({ item }) => (
                <Text style={styles.listItem}>• {item}</Text>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>

        <View style={[styles.inputContainer, { marginBottom: 20 }]}>
          <Text style={styles.label}>Confirmar senha</Text>
          <TextInput
            style={[
              styles.input,
              confirmPassword && error ? styles.error : styles.success,
            ]}
            placeholder="*****"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              verifyPassword(password, text);
            }}
          />
          {confirmPassword !== '' && (
            <Ionicons
              name={error ? 'close-circle' : 'checkmark-circle'}
              size={24}
              color={error ? 'red' : 'green'}
              style={styles.passIcon}
            />
          )}
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </ScrollView>
    </Animated.View>
  );
}
