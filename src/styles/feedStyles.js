import { StyleSheet } from 'react-native';

const feedStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    paddingBottom: 8,
  },
  image: {
    width: 350,
    height: 200,
  },
  user: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 14,
    marginHorizontal: 10,
    marginBottom: 8,
    color: '#555',
  },
});

export default feedStyles;