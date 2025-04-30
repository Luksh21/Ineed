import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/registerStyles.js';

export default function App() {
  const passwordRequirements = [
    'Caracteres especiais (@#$%)',
    'Números',
    'Mín 6 caracteres, Máx 16 caracteres',
  ];

  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(0);

  const anims = [
    useRef(new Animated.Value(0)).current, // cpf
    useRef(new Animated.Value(0)).current, // nome
    useRef(new Animated.Value(0)).current, // usuario
    useRef(new Animated.Value(0)).current, // senha + requisitos
    useRef(new Animated.Value(0)).current, // confirmar senha
    useRef(new Animated.Value(0)).current, // botão
  ];

  useEffect(() => {
    if (step < anims.length) {
      Animated.timing(anims[step], {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  }, [step]);

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

  return (
    <View style={styles.container}>
      <View style={styles.cadContainer}>
        <Text style={styles.cadTitle}>Cadastro de Usuário</Text>

        {step >= 0 && (
          <Animated.View style={{ opacity: anims[0] }}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>CPF * (Somente Números)</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={cpf}
                onChangeText={(text) => {
                  setCpf(text);
                  if (text.length >= 11 && step === 0) setStep(1);
                }}
              />
            </View>
          </Animated.View>
        )}

        {step >= 1 && (
          <Animated.View style={{ opacity: anims[1] }}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nome Completo</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="words"
                value={nome}
                onChangeText={(text) => {
                  setNome(text);
                  if (text.length >= 3 && step === 1) setStep(2);
                }}
              />
            </View>
          </Animated.View>
        )}

        {step >= 2 && (
          <Animated.View style={{ opacity: anims[2] }}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nome de usuário *</Text>
              <TextInput
                style={styles.input}
                value={usuario}
                onChangeText={(text) => {
                  setUsuario(text);
                  if (text.length >= 3 && step === 2) setStep(3);
                }}
              />
            </View>
          </Animated.View>
        )}

        {step >= 3 && (
          <Animated.View style={{ opacity: anims[3] }}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={[styles.input, password && error ? styles.error : styles.success]}
                secureTextEntry
                placeholder="*****"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  verifyPassword(text, confirmPassword);
                  if (text.length >= 6 && step === 3) setStep(4);
                }}
              />
              <View style={styles.passwordInfo}>
                <FlatList
                  data={passwordRequirements}
                  renderItem={({ item }) => <Text style={styles.listItem}>• {item}</Text>}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>
          </Animated.View>
        )}

        {step >= 4 && (
          <Animated.View style={{ opacity: anims[4] }}>
            <View style={[styles.inputContainer, { marginBottom: 20 }]}>
              <Text style={styles.label}>Confirmar senha</Text>
              <TextInput
                style={[styles.input, confirmPassword && error ? styles.error : styles.success]}
                placeholder="*****"
                secureTextEntry
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  verifyPassword(password, text);
                  if (text.length >= 6 && step === 4) setStep(5);
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
          </Animated.View>
        )}

        {step >= 5 && (
          <Animated.View style={{ opacity: anims[5] }}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Continuar</Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </View>
  );
}

