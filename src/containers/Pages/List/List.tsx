import { Checkbox, Container, Heading, Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import ListItem from '../../../components/ListItem';
import { PopoverList } from '../../../components/PopoverList/popoverList';
import styles from './styles';

export const List = () => {
  const [groupValues, setGroupValues] = React.useState([]);
  return (
    <View style={styles.container}>
      <PopoverList />
      <ListItem />
      <ListItem />
      <ListItem />
    </View>
    );
};
