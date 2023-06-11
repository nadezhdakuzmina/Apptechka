import { Button, FormControl, Input, Modal } from 'native-base';
import React from 'react';

import styles from './styles';
import { useDispatch } from 'react-redux';
import { addItemResolver } from '../../data/actions/aptechka/resolvers';
import { PopoverAptechkaProps } from './types';

export const PopoverAptechka: React.FC<PopoverAptechkaProps> = ({ onClose }) => {
  const [name, setName] = React.useState('');
  const [foodType, setType] = React.useState('');

  const dispatch = useDispatch();

  const handleSubmit = React.useCallback(() => {
    // @ts-ignore
    dispatch(addItemResolver({ name, foodType, expires: Date.now() })).then((result) => {
      if (result) {
        onClose();
      }
    });
  }, [name, foodType, dispatch, onClose]);

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
          <FormControl>
            <FormControl.Label>Тип</FormControl.Label>
            <Input onChangeText={setType} />
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
