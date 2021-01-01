import { Box, Button, Center, Checkbox, Container, FormControl, Heading, HStack, Input, Modal, Popover, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import styles from './styles';

export const AptechkaItem = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.foodItem}>
      <View style={styles.foodType}></View>
      <Text style={styles.text}>text</Text>
      <Text style={styles.text}>date</Text>
      <MaterialCommunityIcons name="close" color='#555' size={20} onPress={() => {
        setModalVisible(!modalVisible);
      }} />
    </View>
  );
};
