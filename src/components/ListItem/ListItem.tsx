import { Box, Button, Center, Checkbox, Container, FormControl, Heading, HStack, Input, Modal, Popover, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import styles from './styles';

export const ListItem = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.foodItem}>
      <Checkbox value="one" my={2}>
        UX Research
      </Checkbox>
      <MaterialCommunityIcons name="close" color='#555' size={20} onPress={() => {
        setModalVisible(!modalVisible);
      }} />
    </View>
  );
};
