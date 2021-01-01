import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  foodItem: {
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
    flex: 0,
    width: 20,
    height: 20,
    borderRadius: 3,
    marginRight: 15,
    backgroundColor: '#1890FF',
  }
});

export default styles;
