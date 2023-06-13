import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  scroll: {
    width: '100%'
  },
  noItems: {
    height: 600,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noItemsText: {
    fontSize: 20,
    color: 'hsl(210,8%,45%)'
  }
});

export default styles;
