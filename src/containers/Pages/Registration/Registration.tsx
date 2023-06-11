import { Button, Input, Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createUserResolver } from '../../../data/actions/core/resolvers';
import { registerError as registerErrorSelector } from '../../../data/selectors/registerError';

export const Registration: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const dispatch = useDispatch();
  const registerError = useSelector(registerErrorSelector);

  const submitHandle = React.useCallback(() => {
    // @ts-ignore
    dispatch(createUserResolver({
      username,
      email,
      password,
    }));
  }, [username, email, password]);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.input}>
          <Input
            size="lg"
            variant="filled"
            placeholder="Почта"
            onChangeText={setEmail}
          />
        </View>
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
        {registerError && (
          <Text
            color="red.600"
            style={styles.errorText}
          >
            {registerError}
          </Text>
        )}
      </View>
    </View>
    );
};
