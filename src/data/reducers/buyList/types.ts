export type BuyListItem = {
  id: number;
  name: string;
  isChecked: boolean;
};

export type BuyListState = {
  items: BuyListItem[];
};
