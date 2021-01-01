import { FrigeItem } from '../../reducers/frige/types';
import type { DirtyItem } from '../../resourses/frige/types';

export const normalizeItems = (data: DirtyItem[]): FrigeItem[] => data.map((item) => ({
  ...item,
  expires: parseInt(item.expires, 10),
}));
