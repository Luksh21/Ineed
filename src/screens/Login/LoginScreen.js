import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../../styles/loginStyles';
import { usePasswordVisibility } from '../../utils/usePasswordVisibility';//Importação da função responsável por mostrar e esconder a senha
import { supabase } from '../../services/supabaseClient';//Importação com o supabase
import { useLogin } from '../../hooks/useLogin';//Importação do hook responsável por validar o login

export default function LoginScreen({ navigation }) {
  const { isVisible, toggleVisibility, icon } = usePasswordVisibility();//Função responsável por controlar a visibilidade da senha
  const {//Função responsável por controlar o estado e o comportamento do login
    email, //valor atual do email
    setEmail, //Responsável por alterar o valor do email
    password,//Valor atual da senha
    setPassword,//Responsável por alterar o valor da senha
    error,//Mensagem de erro caso ocorra
    loading,//Define um estado de carregamento
    handleLogin,//Função feita para realiar o login no supabase
  } = useLogin(navigation);

  return (
    <View style={styles.container}> //Container pai da tela, onde estao todos os elementos que fazem parte de tela de login
      <Image source={require('../../assets/ineed.png')} style={styles.logo} />

      <View style={styles.formContainer}> //Esta view é a view do formulário de login, dentro dela colocamos os elementos principais de login e cadastro da app
        <View style={styles.inputContainer}> //View criada para o input do campo email
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="exemplo@email.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}> //View criada para o input do campo senha
          <Text style={styles.label}>Senha</Text>
          <View style={styles.senhaContainer}>
            <TextInput
              style={styles.inputPassword}
              placeholder="******"
              secureTextEntry={!isVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={toggleVisibility} //Botão responsável por mostrar e esconder a senha
              style={styles.iconPassword}>
              <Image source={icon} style={styles.iconeImagem} />
            </TouchableOpacity>
          </View>
        </View>

         

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleLogin}> //Quando o botãp de login for pressionao, chamará a função handleLogin para a validação
          <Text style={styles.loginButtonText}>
            {loading ? 'Entrando...' : 'Entrar'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '100%' }}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}> //View criada para os icones de login alternativo, por enquanto ainda sem funcionalidades
          <TouchableOpacity>
            <Image
              source={require('../../assets/google.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/facebook.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/linkedin.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity //botão que direciona o usuário a tela de cadastro do app
          style={styles.cadButton}
          onPress={() => navigation.navigate('UserCad')}>
          <Text style={styles.registerButtonText}>Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.sejaPrestador}>Seja um prestador de serviço</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
