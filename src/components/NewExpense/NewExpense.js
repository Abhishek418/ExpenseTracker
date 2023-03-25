import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {
    const onFormSaveHandler = (expense) => {
        const newExpense = { ...expense, id: Math.random().toString(), date: new Date(expense.date) };
        props.onAddExpense(newExpense);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onFormSave={onFormSaveHandler} />
        </div>
    );
}
