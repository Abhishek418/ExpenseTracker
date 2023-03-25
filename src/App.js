import "./App.css";
import expenseData from "./data/expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React from "react";

function App() {
    const [expensesList, setExpensesList] = React.useState(expenseData);

    const onAddExpenseHandler = (expense) => {
        setExpensesList((prevState) => {
            return [expense, ...prevState];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={onAddExpenseHandler} />
            <Expenses expenseData={expensesList} />
        </div>
    );
}

export default App;
