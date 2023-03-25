import React from "react";
import "./expenseList.css";
import ExpenseItem from "./ExpenseItem";
export default function ExpenseList(props) {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem date={expense.date} price={expense.amount} title={expense.title} key={expense.id} />
            ))}
        </ul>
    );
}
