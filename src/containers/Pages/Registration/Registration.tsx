import { Avatar, Button } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import { AptechkaItem } from '../../../components/AptechkaItem/aptechkaItem';
import { PopoverList } from '../../../components/PopoverList/popoverList';
import styles from '../Profile/styles';

export const Registration = () => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Avatar 
          bg="green.500" 
          source={{
            uri: "https://bit.ly/broken-link"
          }}
          size='lg'
        >
          L
        </Avatar>
        <Text style={styles.text}> Ваш логин</Text>
      </View>
    <Button style={styles.button}>Выйти</Button>
    </View>
    );
};
