import React, { useState } from 'react';
import { loginUser } from '../services/authService'; // ajuste o caminho se necessário
import { useNavigation } from '@react-navigation/native';

export function useLogin() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!identifier || !password) {
      setError('Preencha todos os campos');
      return;
    }

    setLoading(true);
    const { data, error } = await loginUser(identifier, password);
    setLoading(false);

    if (error) {
      setError(error);
    } else {
      setError('');
      // redireciona para outra tela
      navigation.navigate('UserCad', { user: data });
    }
  };

  return {
    identifier,
    setIdentifier,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
  };
}
