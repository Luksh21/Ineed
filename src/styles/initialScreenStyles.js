import { StyleSheet } from 'react-native';
  
  const iniScreenstyles = StyleSheet.create({

  container:{
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center',
  },
  
  perfil_container: {
    flex: 1, 
    padding: 40,
    
  },
  input: {
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 5,
  paddingHorizontal: 10,
  marginBottom: 16,
  },
  label: {
  fontSize: 16,
  fontWeight: '500',
  marginBottom: 4,
  color: '#333',
  },
  logo: {
  width: 110,
  height: 110,
  borderRadius: 60,
  alignSelf: 'center',
  marginBottom: 12,
},


  
  })
export default iniScreenstyles;