import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    width: '100%',
  },
  errorText: {
    marginTop: 10,
  }
});

export default styles;
