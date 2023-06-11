import { FrigeItem } from '../../reducers/aptechka/types';
import type { DirtyItem } from '../../resourses/aptechka/types';

export const normalizeItems = (data: DirtyItem[]): FrigeItem[] => data.map((item) => ({
  ...item,
  expires: parseInt(item.expires, 10),
}));
