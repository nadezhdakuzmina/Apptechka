import { AddIcon, Fab, ScrollView } from 'native-base';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ListItem from '../../../components/ListItem';
import { PopoverList } from '../../../components/PopoverList';
import styles from './styles';
import { useSelector } from 'react-redux';
import { buyListItems } from '../../../data/selectors/buyListItems';

export const List = () => {
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
        {sortedList.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </ScrollView>
      <Fab
        onPress={handleOpenPopover}
        shadow={2}
        bottom={120}
        right={10}
        size="lg"
        icon={<AddIcon />}
      />
    </SafeAreaView>
    );
};
