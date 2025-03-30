import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function LoginScreen() {
  
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  

  return (

    <View style={styles.container}>
      
      
      <Image source={require('./assets/ineed.png')} style={styles.logo} />

      <View style={styles.formContainer}>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome de Usuário / Email / CPF</Text>
          <TextInput style={styles.input} placeholder="exemplo@email.com" keyboardType="email-address" />
        </View>

     
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
        <View style={styles.senhaContainer}>
          <TextInput 
          style={styles.inputSenha} 
          placeholder="******" 
          secureTextEntry={!senhaVisivel} />
          <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)} style={styles.iconeSenha}>
            <Image
              source = {senhaVisivel ? require('./assets/eye-open.png') : require('./assets/eye-closed.png')}
              style = {styles.iconeImagem}/>
          </TouchableOpacity>
          </View>
        </View>

     
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

     
        <TouchableOpacity style={{width: '100%'}}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      
      
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require('./assets/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/linkedin.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      {}
      <TouchableOpacity style={styles.botaoCadastro}>
        <Text style={styles.registerButtonText}>Cadastrar-se</Text>
      </TouchableOpacity>

      
      <TouchableOpacity>
        <Text style={styles.sejaPrestador}>Seja um prestador de serviço</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#241ECC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 235,
    height: 215,
    marginBottom: -53,
    zIndex: 1,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
    
    borderColor: '#000000',
    marginTop: 10,
    
  },
  label: {
    color: '#1E1E1E',
    fontSize: 14,
    marginBottom: 3,
    marginLeft: 8,
    borderColor: '#000000',
    
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#000000',
    borderWidth: 1.5,
  },
  senhaContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#000000',
    paddingHorizontal: 10,
  },
  inputSenha:{
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  iconeSenha:{
    padding: 10,
  
  },
  iconeImagem:{
    width: 24,
    height: 24,
  },
  loginButton: {
    backgroundColor: '#0056b3',
    padding: 15,
    borderRadius: 8,
    width: '85%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#3DADFF',
    marginTop: 10,
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginRight: 22,

  },
 
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  formContainer:{
    backgroundColor: '#FFFFFF',
    width: '100%',
    maxWidth: 400,
    height: 500,
    borderRadius: 50,
    alignItems: 'center',
    padding: 20,

  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
  botaoCadastro: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
  },
  registerButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sejaPrestador: {
    color: '#3DADFF',
    marginTop: 20,
    textDecorationLine: 'underline',
    textAlign: 'center',
   
  },
});