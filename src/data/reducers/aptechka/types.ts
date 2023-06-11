export type AptechkaItem = {
  id: number;
  name: string;
  expires: number;
  foodType: string;
};

export type AptechkaState = {
  items: AptechkaItem[];
};
