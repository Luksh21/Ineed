//Hook criado para armazenar as informações de cadastro no banco de dados
import { supabase } from '../services/supabaseClient'; 

export const handleSignUp = async (email, password, confirmPassword, nome, usuario, cpf) => {//Função assíncrona que recebe as informações do formulário de cadastro como parâmetros
 
  if (!email || !password || !confirmPassword || !nome || !usuario || !cpf ) {
    return { success: false, error: 'Por favor, preencha todos os campos obrigatórios.' };
  } //Antes de iniciar uma tentativa de cadastro, irá verificar se todos os campos estão preenchidos

  if (password !== confirmPassword) {
    return { success: false, error: 'As senhas não coincidem.' };
  }//Fará uma verificação para ver se as senhas são iguais

 

  try {

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({ //Neste trecho, ocorre o cadastro do usuário através do sistema de autenticação do banco de dados, que no nosso caso, é o Supabase
      email: email, //Será utilizado para o login
      password: password,//Será utilizado para o login
      options: {
     
        data: { //Já os dados abaixo, serão armazeenados junto com a criação do perfil do usuário
          nome_completo: nome,
          nome_usuario: usuario,
          cpf: cpf,
        
        }
      }
    });

    if (signUpError) {
     
      console.error('Erro no Supabase SignUp:', signUpError);
      return { success: false, error: signUpError.message };
    }

 
    if (signUpData.user) { //Aqui colocamos uma condição para ser realizada caso o cadastro seja bem sucedido
        console.log('Usuário criado:', signUpData.user);

       
        
        const { error: insertError } = await supabase
          .from('cadusers')
          .insert([{
              id: signUpData.user.id, //Os dados fornecidos no formulário serão armazenados em uma tabela criada chamada cadUsers
              cpf: cpf,
              nome_completo: nome,
              nome_usuario: usuario,
              email: email 
              
          }]);

        if (insertError) {
            console.error('Erro ao inserir dados adicionais em cadusers:', insertError);
            
        }
        

        
        if (signUpData.session) {
            console.log('Sessão iniciada após cadastro:', signUpData.session);
            return { success: true, data: signUpData }; 
        } else {
           
            return { success: true, data: signUpData, message: 'Cadastro realizado! Verifique seu email para confirmação.' };
        }
    } else {
       
        return { success: false, error: 'Não foi possível criar o usuário.' };
    }

  } catch (e) {
    console.error('Erro inesperado no handleSignUp:', e);
    return { success: false, error: 'Erro ao cadastrar o usuário.' };
  }
};
