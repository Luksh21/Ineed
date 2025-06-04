import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

const buscarStyles = {
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchInput: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    borderColor: 'blue'
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: cardWidth,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
  },
  nome: {
    padding: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
};
export default buscarStyles;