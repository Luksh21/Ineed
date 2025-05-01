import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/loginStyles';
import { usePasswordVisibility } from '../../utils/usePasswordVisibility';


export default function LoginScreen({ navigation }) {
  const { isVisible, toggleVisibility, icon } = usePasswordVisibility();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/ineed.png')} style={styles.logo} />

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome de Usuário / Email / CPF</Text>
          <TextInput style={styles.input} placeholder="exemplo@email.com" keyboardType="email-address" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.senhaContainer}>
            <TextInput 
              style={styles.inputPassword} 
              placeholder="******" 
              secureTextEntry={!isVisible} 
            />
            <TouchableOpacity onPress={toggleVisibility} style={styles.iconPassword}>
              <Image
                source={icon}
                style={styles.iconeImagem}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '100%' }}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <TouchableOpacity>
            <Image source={require('../../assets/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/linkedin.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.cadButton}
          onPress={() => navigation.navigate('UserCad')}
        >
          <Text style={styles.registerButtonText}>Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.sejaPrestador}>Seja um prestador de serviço</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
