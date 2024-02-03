export interface Expenses {

    id: number;
  description: string;
  amount: number;
  dateTime: string;
  user: {
    id: number;
    group: {
      id: number;
      groupName: string;
      totalExpense: number;
    };
    name: string;
  };
}
