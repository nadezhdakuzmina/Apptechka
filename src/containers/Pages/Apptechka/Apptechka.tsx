import { AddIcon, Fab, ScrollView, Text, View } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import { AptechkaItem } from '../../../components/AptechkaItem';
import { PopoverAptechka } from '../../../components/PopoverAptechka';
import { aptechkaItems } from '../../../data/selectors/aptechkaItems';

export const Apptechka = () => {
  const [isPopoverOpen, setPopoverOpen] = React.useState(false);

  const items = useSelector(aptechkaItems);

  const handleClosePopover = React.useCallback(() => {
    setPopoverOpen(false);
  }, []);

  const handleOpenPopover = React.useCallback(() => {
    setPopoverOpen(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isPopoverOpen && <PopoverAptechka onClose={handleClosePopover} />}
      <ScrollView style={styles.scroll}>
        {items.length ? items.map((item) => (
          <AptechkaItem key={item.id} {...item} />
        )) : (
          <View style={styles.noItems}>
            <Text style={styles.noItemsText}>Список пуск</Text>
          </View>
        )}
      </ScrollView>
      <Fab
        renderInPortal={false}
        onPress={handleOpenPopover}
        shadow={2}
        bottom={10}
        right={10}
        size="lg"
        icon={<AddIcon />}
      />
    </SafeAreaView>
    );
};
