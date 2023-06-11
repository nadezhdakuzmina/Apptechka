import { Button, Input, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { authUserResolver } from '../../../data/actions/core/resolvers';
import { authError as authErrorSelector } from '../../../data/selectors/authError';

export const Auth: React.FC = () => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const { navigate } = useNavigation();

  const dispatch = useDispatch();
  const authError = useSelector(authErrorSelector);

  const submitHandle = React.useCallback(() => {
    // @ts-ignore
    dispatch(authUserResolver({
      username,
      password,
    }));
  }, [username, password]);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.input}>
          <Input
            size="lg"
            variant="filled"
            placeholder="Логин"
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.input}>
          <Input
            size="lg"
            variant="filled"
            placeholder="Пароль"
            onChangeText={setPassword}
          />
        </View>
        <Button onPress={submitHandle}>Войти</Button>
        {authError && (
          <Text
            color="red.600"
            style={styles.errorText}
          >
            {authError}
          </Text>
        )}
        <Text
          style={styles.goNextPage}
          color="blue.700"
          // @ts-ignore
          onPress={() => navigate('registration')}
        >
          Регистрация
        </Text>
      </View>
    </View>
    );
};
