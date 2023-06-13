import { AddIcon, Fab, ScrollView, Text, View } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import ListItem from '../../../components/ListItem';
import { PopoverList } from '../../../components/PopoverList';
import styles from './styles';
import { useSelector } from 'react-redux';
import { buyListItems } from '../../../data/selectors/buyListItems';

// @ts-ignore
export const List = (props) => {
  const [isPopoverOpen, setPopoverOpen] = React.useState(false);

  const items = useSelector(buyListItems);

  const handleClosePopover = React.useCallback(() => {
    setPopoverOpen(false);
  }, []);

  const handleOpenPopover = React.useCallback(() => {
    setPopoverOpen(true);
  }, []);

  const sortedList = React.useMemo(() => {
    return items.sort(({ isChecked: a }, { isChecked: b }) => {
      if (a === b) {
        return 0;
      }

      if (a) {
        return 1;
      }

       return -1;
    });
  }, [items]);

  return (
    <SafeAreaView style={styles.container}>
      {isPopoverOpen && <PopoverList onClose={handleClosePopover} />}
      <ScrollView style={styles.scroll}>
        {sortedList.length ? sortedList.map((item) => (
          <ListItem key={item.id} {...item} />
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
