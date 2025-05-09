import { supabase } from './supabaseClient';
export async function loginUser(identifier, password){
  const {data, error} = await supabase
    .from('cadusers')
    .select('*')
    .or(`cpf.eq.${identifier},email.eq.${identifier},nome_usuario.eq.${identifier}`)
    .eq('senha', password)
    .single()

    if (error || !data) {
      return { error: 'Usuário ou senha inválidos'}
    }
    return {data, error: null}
}