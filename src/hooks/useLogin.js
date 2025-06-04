import { useState } from 'react';
import { Alert } from 'react-native';
import { supabase } from '../services/supabaseClient';
//Hook responsável por organizar a lógica de login com o banco
export function useLogin(navigation) {
  const [email, setEmail] = useState(''); // O useState foi utilizado para criar variáveis locais e guardar as informações inseridas
  const [password, setPassword] = useState('');//Tanto o 'email' e 'password' são as variáveis atuais, os 'set' que vem depois são responsáveis por atualizar o valor da variável, ou seja, 'setEmail' atualiza o valor de email, e 'setSenha' atualiza o valor da senha(ambas começaram vazias).
  const [loading, setLoading] = useState(false);//Indica que o app está carregando
  const [error, setError] = useState('');// Irá armazenar uma mensagem de erro caso acorra


 const handleLogin = async () => { //Função que será chamada qunado o usuário clicar no botão 'Entrar', o async está transformando a função em assíncrona, ou seja, uma função que permite usar um 'await', fazendo a função esperar algo acontecer antes de continuar.
  setLoading(true);
  setError('');

  const { data, error } = await supabase.auth.signInWithPassword({ //Utilizará os valores inseridos para efetuar uma solicitação de login no banco.
    email,
    password,
  });  

  if (error) {
    setError(error.message);//Caso ocorra algum erro, irá armazenar a mensagem de erro na variável 'error'
    Alert.alert('Erro no login', error.message);//Mostrará a mensagem na tela 'Erro no login', junto com o erro armazenado na variável error
    setLoading(false);
    return;
  }
 
  if (data.user) {
    navigation.replace('Splash');//Caso o login seja bem sucedido, irá navegar para a tela de transição
  } else {
    setError('Ocorreu um erro no login.');
    Alert.alert('Erro no login', 'Ocorreu um erro inesperado.');//Exibe uma mensagem de erro
  }

  setLoading(false);
};

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
  };
}
