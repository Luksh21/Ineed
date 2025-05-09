import supabase from '../services/supabaseClient';

export const handleRegister = async (cpf, nome, usuario, password, confirmPassword) => {
  // Validação básica
  if (!cpf || !nome || !usuario || !password || !confirmPassword) {
    return { success: false, error: 'Por favor, preencha todos os campos.' };
  }

  if (password !== confirmPassword) {
    return { success: false, error: 'As senhas não coincidem.' };
  }

  try {
    const { data, error } = await supabase
      .from('cadusers') // nome da tabela
      .insert([
        {
          cpf,
          nome_completo: nome,
          nome_usuario: usuario,
          senha: password,
        },
      ]);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (e) {
    return { success: false, error: 'Erro ao cadastrar o usuário.' };
  }
};
