import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#241ECC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cadContainer: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    shadowColor:'#241ECC',
    top: 10,
    left: 0,
    right: 0,
    borderRadius: 25,
    paddingHorizontal: 20,
    margin: 20,
    padding: 40,
    height: 600, 
  },
  headerImage: {
  width: 100,
  height: 100,
  alignSelf: 'center',
  marginBottom: 20,
  marginTop: -10,
},

  cadTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputArea: {
    height: 250, 
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: '#000000',
    fontSize: 16,
    padding: 10,
    width: '100%',
  },
  inputContainer: {
    width: '90%',
    paddingTop: 10,
    alignSelf: 'center',
  },
  label: {
    marginBottom: 2,
  },
  listItem: {
    marginTop: 10,
    fontSize: 14,
    marginLeft: 15,
  },
  success: {
    borderColor: 'green',
  },
  error: {
    borderColor: 'red',
  },
  passIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: 3 }],
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
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 14,
  },
  passwordInfo: {
    marginTop: 10,
  },
});

export default styles;
