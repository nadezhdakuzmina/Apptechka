import { Checkbox, Container, Heading, Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { AptechkaItem } from '../../../components/AptechkaItem/aptechkaItem';
import { PopoverList } from '../../../components/PopoverList/popoverList';
import styles from './styles';

export const Apptechka = () => {
  const [groupValues, setGroupValues] = React.useState([]);
  return (
    <View style={styles.container}>
      <PopoverList />
      <AptechkaItem />
      <AptechkaItem />
      <AptechkaItem />
    </View>
    );
};
