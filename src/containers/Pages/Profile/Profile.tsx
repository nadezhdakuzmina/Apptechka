import { Avatar, Button } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Profile/styles';
import { useDispatch, useSelector } from 'react-redux';
import { logoutResolver } from '../../../data/actions/core/resolvers';
import { user as userSelector } from '../../../data/selectors/user';
import { User } from '../../../data/actions/core/types';

export const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSelector) as User;

  const userColor = React.useMemo(() => {
    let hash = 0;

    for (let i = 0; i < user.username.length; i++) {
      hash = user.username.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }

    return color;
  }, []);

  const onExit = React.useCallback(() => {
    // @ts-ignore
    dispatch(logoutResolver());
  }, [dispatch]);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Avatar 
          bg={userColor}
          size='lg'
        />
        <Text style={styles.text}>{user.username}</Text>
      </View>
      <Button
        style={styles.button}
        onPress={onExit}
      >
        Выйти
      </Button>
    </View>
    );
};
