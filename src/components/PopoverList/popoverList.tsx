import { Box, Button, Center, Checkbox, Container, FormControl, Heading, HStack, Input, Modal, Popover, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

export const PopoverList = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return <>
      <Modal style={styles.container} isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input ref={initialRef} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setModalVisible(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setModalVisible(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <HStack space="4" justifyContent="center" alignItems="center">
        <View style={styles.button} >
          <MaterialCommunityIcons name="plus" color='#fff' size={40}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </View>
      </HStack>
    </>;
};
