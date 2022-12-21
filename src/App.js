import React from "react";
// import NewExpense from "./NewExpense/NewExpense";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "./NewExpense/NewExpense";
const App=()=> {
   const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 2, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 3, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 4, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 5, 12),
    },
    {
      id: 'e5',
      title:'phone',
      amount:3000,
      date: new Date(2022,6,11)
    }
  ];
  return (
    <div>
      <NewExpense/>
      <h2>Let's get started!</h2>
      <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[4].title}
      amount={expenses[4].amount}
      date={expenses[4].date}
      />
     
     
    </div>
  );
}

export default App;
