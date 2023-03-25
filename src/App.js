import "./App.css";
import expenseData from "./data/expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React from "react";
import Card from "./components/UI/Card";

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
            <Card className="expenses">
                <h3>
                    Please Note: No expenses are saved , once you refresh everything will be lost!. Features like authenctication , saving the
                    expenses to the db , deleting the expenses and much more are in the development.
                </h3>
            </Card>
        </div>
    );
}

export default App;
