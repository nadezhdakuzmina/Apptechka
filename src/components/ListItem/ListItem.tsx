import { Checkbox, Text } from 'native-base';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import styles from './styles';
import { BuyListItem } from '../../data/reducers/buyList';
import { useDispatch } from 'react-redux';
import { checkItemResolver, removeItemResolver } from '../../data/actions/buyList/resolvers';

export const ListItem: React.FC<BuyListItem> = ({ id, name, isChecked }) => {  
  const dispatch = useDispatch();

  const handleCheck = React.useCallback((status: boolean) => {
    // @ts-ignore
    dispatch(checkItemResolver(id, status));
  }, [id, dispatch]);

  const handleRemove = React.useCallback(() => {
    // @ts-ignore
    dispatch(removeItemResolver(id));
  }, [id]);

  return (
    <View style={styles.root}>
      <Checkbox
        value='one'
        defaultIsChecked={isChecked}
        my={2}
        onChange={handleCheck}
      >
        <Text strikeThrough={isChecked}>{name}</Text>
      </Checkbox>
      <MaterialCommunityIcons
        name="close"
        color='#555'
        size={20}
        onPress={handleRemove}
      />
    </View>
  );
};
