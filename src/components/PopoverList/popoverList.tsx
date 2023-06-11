import { Box, Button, Center, Checkbox, Container, FormControl, Heading, HStack, Input, Modal, Popover, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { addItemResolver } from '../../data/actions/buyList/resolvers';
import { PopoverListProps } from './types';

export const PopoverList: React.FC<PopoverListProps> = ({ onClose }) => {
  const [name, setName] = React.useState('');

  const dispatch = useDispatch();

  const handleSubmit = React.useCallback(() => {
    // @ts-ignore
    dispatch(addItemResolver({ name })).then((result) => {
      if (result) {
        onClose();
      }
    });
  }, [name, dispatch, onClose]);

  return (
    <Modal
      style={styles.container}
      isOpen={true}
      onClose={onClose}
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Название</FormControl.Label>
            <Input onChangeText={setName} />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={onClose}>
              Отмена
            </Button>
            <Button onPress={handleSubmit}>
              Добавить
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
