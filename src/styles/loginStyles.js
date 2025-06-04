import {StyleSheet} from 'react-native';

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
    zIndex: 1
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    maxWidth: 400,
    height: 500,
    borderRadius: 50,
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
    marginTop: 10,
  },
  label: {
    color: '#1E1E1E',
    fontSize: 14,
    marginBottom: 3,
    marginLeft: 8,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#000000',
    borderWidth: 1.5,
  },
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#000000',
    paddingHorizontal: 10,
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  iconPassword: {
    padding: 10,
  },
  iconeImagem: {
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
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
  cadButton: {
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

export default styles;