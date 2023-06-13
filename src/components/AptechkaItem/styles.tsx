import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    borderBottomColor: '#A8C1F8',
    borderBottomWidth: 1,
  },
  foodType: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  info: {
    flex: 1,
    marginLeft: 10,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  infoItem: {
    marginRight: 10,
  }
});

export default styles;
