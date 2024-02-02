export interface Users {

   
        id: number;
        name: string;
        group: {
          id: number;
          groupName: string;
          totalExpense: number;
        };
      
}
