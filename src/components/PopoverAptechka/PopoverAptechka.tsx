import { Button, FormControl, Input, Modal } from 'native-base';
import React from 'react';

import RNDateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';
import { useDispatch } from 'react-redux';
import { addItemResolver } from '../../data/actions/aptechka/resolvers';
import { PopoverAptechkaProps } from './types';

export const PopoverAptechka: React.FC<PopoverAptechkaProps> = ({ onClose }) => {
  const [name, setName] = React.useState('');
  const [foodType, setType] = React.useState('');
  const [date, setDate] = React.useState(new Date());

  const dispatch = useDispatch();

  const handleSubmit = React.useCallback(() => {
    // @ts-ignore
    dispatch(addItemResolver({
      name,
      foodType,
      expires: date.getTime(),
    })).then((result: boolean) => {
      if (result) {
        onClose();
      }
    });
  }, [name, foodType, date, dispatch, onClose]);

  const handleDateChange = React.useCallback((_: unknown, date?: Date) => {
    if (date) {
      setDate(date);
    }
  }, []);

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
          <FormControl>
            <FormControl.Label>Годен до</FormControl.Label>
            <RNDateTimePicker mode="date" value={date} onChange={handleDateChange} />
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
