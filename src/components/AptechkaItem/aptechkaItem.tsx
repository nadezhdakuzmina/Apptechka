import { Text } from 'native-base';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { removeItemResolver } from '../../data/actions/aptechka/resolvers';
import type { AptechkaItem as AptechkaItemType } from '../../data/reducers/aptechka';

export const AptechkaItem: React.FC<AptechkaItemType> = ({ id, name, foodType }) => {  
  const dispatch = useDispatch();

  const handleRemove = React.useCallback(() => {
    // @ts-ignore
    dispatch(removeItemResolver(id));
  }, [id]);

  const foodTypeColor = React.useMemo(() => {
    let hash = 0;

    for (let i = 0; i < foodType.length; i++) {
      hash = foodType.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }

    return color;
  }, []);

  return (
    <View style={styles.root}>
      <View style={[styles.foodType, { backgroundColor: foodTypeColor }]} />
      <Text>{foodType}</Text>
      <Text>{name}</Text>
      <MaterialCommunityIcons
        name="close"
        color='#555'
        size={20}
        onPress={handleRemove}
      />
    </View>
  );
};
